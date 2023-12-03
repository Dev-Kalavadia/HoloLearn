// //  HANDLE SIGNIN AUTHENTICATION REQUESTS FROM THE FRONTEND
// //  RETURNS A JWT TOKEN IF AUTHENTICATION IS SUCCESSFUL
// //  RETURNS AN ERROR IF AUTHENTICATION IS UNSUCCESSFUL

// const express = require("express");

// const app = express();
// const port = 4000;

// app.use(express.json());

// app.post("/signin", (req, res) => {
//     const { username, password } = req.body;
    
//     // 1. VALIDATE USERNAME AND PASSWORD
//     // 2. IF VALID, GENERATE A JWT TOKEN
//     // 3. RETURN THE TOKEN
//     // 4. IF INVALID, RETURN AN ERROR
    
//     // 1. VALIDATE USERNAME AND PASSWORD
//     if (username === "admin" && password === "admin") {
//         // 2. IF VALID, GENERATE A JWT TOKEN
//         const token = "123456789";
//         // 3. RETURN THE TOKEN
//         res.json({ token });
//     } else {
//         // 4. IF INVALID, RETURN AN ERROR
//         res.status(401).json({ error: "Invalid username or password" });
//     }

// });
