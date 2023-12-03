const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const multer = require('multer');
const saltRounds = 10; // for bcrypt password hashing
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

const url = 'mongodb+srv://dk3936:MQJpx3fMocfaLvAV@hololearn-server.l5azrnv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url)
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
    const token = "fake-jwt-token-for-demo-purposes"; // Replace this with real JWT generation

    const userResponse = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      assets: user.assets,
    };

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
    const token = "123456789";
    // Send back the token
    res.json({ token });
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
    user.assets = user.assets.filter(asset => asset.name !== assetName);
    await user.save();

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

    // Assuming the user's assets are stored in an array named 'assets'
    user.contents = user.contents.filter(content => content.name !== contentName);
    await user.save();

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



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


