const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const multer = require('multer');
const saltRounds = 10; // for bcrypt password hashing
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const OpenAI_Api = process.env.OPEN_AI_API_KEY || 'Mykey';

const CLIENT_ID = '286133937381-1cjo5acc5pumi8afqh3vnig2o27tfcsr.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
const SECRET_KEY = process.env.JWT_SECRET || 'your-very-secret-key'; // Use an environment variable for the secret key

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

const openai = new OpenAI({
  apiKey: OpenAI_Api
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/holotutor', // Replace with your own database name
)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));


const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true }, // assuming email is the username
  password: String,
  assets: [
    {
      name: String,
      path: String,
      size: Number,
      originalName: String,
    },
  ],
  contents: [
    {
      name: String,
      path: String,
      size: Number,
      originalName: String,
    },
  ],
});

const UserModel = mongoose.model('User', UserSchema);

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user associated with the email provided by the user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid User');
    }

    // Check if the provided password matches the user's password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(402).send('Invalid password');
    }

    // Here, you should create a real JWT token using a library like jsonwebtoken
    // const token = "fake-jwt-token-for-demo-purposes"; // Replace this with real JWT generation

    const userResponse = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      assets: user.assets,
    };

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '24h' } // Token expires in 24 hours
    );

    // Send the token to the client
    res.send({ token, user: userResponse });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while signing in');
  }
});


app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Create a new user with hashed password
    const user = new UserModel({
      firstname,
      lastname,
      email, // using email as the username
      password: hashedPassword,
    });

    await user.save();

    // Generate a JWT token - in a real app, you'd want to use a proper JWT library
    // const token = "123456789";
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '24h' } // Token expires in 24 hours
    );

    // Send back the token
    res.send({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error (likely duplicate email)
      res.status(400).json({ error: "Email already exists" });
    } else {
      console.error(err);
      res.status(500).json({ error: "Failed to sign up" });
    }
  }
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    // Get the original extension of the file
    const ext = path.extname(file.originalname);
    // Create a new filename with the original extension
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});
const upload = multer({ storage: storage });

app.post('/upload-asset', upload.single('asset'), async (req, res) => {
  const { email, assetName } = req.body;
  const assetPath = req.file?.path;

  if (!assetPath) {
    return res.status(400).send('No file uploaded');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    user.assets.push({ name: assetName, path: assetPath, size: req.file.size, originalName: req.file.originalname });
    await user.save();
    res.send({
      message: 'Asset uploaded successfully', asset: {
        name: assetName, path: assetPath,
        size: req.file.size
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading asset');
  }
});

app.post('/upload-content', upload.single('content'), async (req, res) => {
  const { email, contentName } = req.body;
  const contentPath = req.file?.path;

  if (!contentPath) {
    return res.status(400).send('No file uploaded');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    user.contents.push({ name: contentName, path: contentPath, size: req.file.size, originalName: req.file.originalname });
    await user.save();
    res.send({
      message: 'Content uploaded successfully', content: {
        name: contentName, path: contentPath,
        size: req.file.size
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading content');
  }
});

app.get('/get-contents', async (req, res) => {
  const { email } = req.query; // Get email from query parameters

  if (!email) {
    return res.status(400).send('Email is required to get contents');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const contents = user.contents;
    res.send({ contents });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving contents');
  }
});

app.get('/get-assets', async (req, res) => {
  const { email } = req.query; // Get email from query parameters

  if (!email) {
    return res.status(400).send('Email is required to get assets');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const assets = user.assets;
    res.send({ assets });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving assets');
  }
});

app.get('/get-content', async (req, res) => {
  const { email, contentName } = req.query;

  if (!email || !contentName) {
    return res.status(400).send('Email and content name are required to get content');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const content = user.contents.find(a => a.name === contentName);
    if (!content) {
      return res.status(405).send('Content not found');
    }
    const file = `${__dirname}/${content.path}`;
    res.download(file, content.originalName);

  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving content');
  }
});

app.get('/get-asset', async (req, res) => {
  const { email, assetName } = req.query;

  if (!email || !assetName) {
    return res.status(400).send('Email and asset name are required to get asset');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const asset = user.assets.find(a => a.name === assetName);
    if (!asset) {
      return res.status(404).send('Asset not found');
    }
    const file = `${__dirname}/${asset.path}`;
    res.download(file, asset.originalName);

  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving asset');
  }
});

app.delete('/delete-asset', async (req, res) => {
  const { email, assetName } = req.body; // Get email from query parameters

  if (!email || !assetName) {
    return res.status(400).send('Email and asset name are required to delete asset');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Assuming the user's assets are stored in an array named 'assets'
    const asset = user.assets.find(a => a.name === assetName);
    if (asset) {
      // Delete the file from the filesystem
      fs.unlink(path.join(__dirname, asset.path), (err) => {
        if (err) {
          console.error('Failed to delete file:', err);
          return res.status(500).send('Failed to delete asset file');
        }
      });

      // Remove the asset from the user's assets array
      user.assets = user.assets.filter(a => a.name !== assetName);
      await user.save();
    }

    res.send({ message: 'Asset deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting asset');
  }
}
);

app.delete('/delete-content', async (req, res) => {
  const { email, contentName } = req.body; // Get email from query parameters

  if (!email || !contentName) {
    return res.status(400).send('Email and content name are required to delete content');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const content = user.contents.find(c => c.name === contentName);
    if (content) {
      // Delete the file from the filesystem
      fs.unlink(path.join(__dirname, content.path), (err) => {
        if (err) {
          console.error('Failed to delete file:', err);
          return res.status(500).send('Failed to delete content file');
        }
      });

      // Remove the content from the user's contents array
      user.contents = user.contents.filter(c => c.name !== contentName);
      await user.save();
    }

    res.send({ message: 'Content deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting content');
  }
});

app.get('/get-preview-content', async (req, res) => {
  const { email, contentName } = req.query;

  if (!email || !contentName) {
    return res.status(400).send('Email and content name are required to get content');
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const content = user.contents.find(a => a.name === contentName);
    if (!content) {
      return res.status(404).send('Content not found');
    }

    const file = `${__dirname}/${content.path}`;
    // Instead of using res.download, read the file and send it as a response
    const fileStream = fs.createReadStream(file);
    fileStream.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving content');
  }
});


// endpoint to delete user
app.delete('/delete-user', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required to delete user');
  }

  try {
    const result = await UserModel.deleteOne({ email });
    if (result.deletedCount === 0) {
      return res.status(404).send('User not found');
    }

    res.send({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting user');
  }
});

app.post('/google-signin', async (req, res) => {
  const { tokenId } = req.body;

  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Extract user information from the payload
    const { email, name, picture } = payload;
    const firstname = name.split(' ')[0];
    const lastname = name.split(' ')[1] || '';

    // Check if user exists in the database
    let user = await UserModel.findOne({ email });

    if (!user) {
      // If user does not exist, create a new one
      user = new UserModel({
        firstname,
        lastname,
        email,
        // You might want to handle passwords differently for Google-authenticated users
      });

      await user.save();
    }

    // Generate a JWT token
    const token = "generate-your-jwt-token-here"; // Replace with your JWT generation logic

    // Send the token and user information to the client
    res.send({ token, user: { firstname, lastname, email, picture } });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing in with Google');
  }
});



app.post('/google-signup', async (req, res) => {
  const { tokenId } = req.body;

  console.log('Received tokenId:', tokenId); // Log the tokenId for debugging

  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Extract user information from the payload
    const { email, name, picture } = payload;
    const firstname = name.split(' ')[0];
    const lastname = name.split(' ')[1] || '';

    // Check if user already exists
    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).send('User already exists');
    }

    // Create a new user
    user = new UserModel({
      firstname,
      lastname,
      email,
      // You might want to handle passwords and other fields differently for Google-authenticated users
    });

    await user.save();

    // Generate a JWT token
    const token = "generate-your-jwt-token-here"; // Replace with your JWT generation logic

    // Send the token and user information to the client
    res.send({ token, user: { firstname, lastname, email, picture } });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing up with Google');
  }
});


//  propogate a response from client to OPEN-AI GPT 3.5 and return the response to the client
app.post('/holotutor', async (req, res) => {
  const { prompt } = req.body;

  console.log('Received prompt:', prompt);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: 'You are a helpful teaching assistant called HoloTutor' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    });

    const replies = response.choices.map(choice => choice.message.content).join("\n");

    res.send({ response: replies });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending prompt to GPT-3.5');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Press Ctrl+C to stop the server`);

});


