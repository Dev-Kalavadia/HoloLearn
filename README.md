# HoloLearn Website
## [Link to site](https://hololearn.vercel.app/)


## Introduction
HoloLearn brings educational content to life, transforming traditional learning environments into interactive, three-dimensional experiences. Our technology is designed to captivate students and educators alike, offering a unique and engaging way to learn.

It leverages technologies like Node.js, Express, React, and MongoDB to offer:
- Immersive XR Learning Experiences
- Enhanced Engagement & Comprehension
- Accessible Tech for All Educators.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Express.js
- Mongoose 

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Dev-Kalavadia/HoloLearn.git

2. Install backend dependencies:
   ```bash
    cd Backend
    npm install
    nodemon

3. Install frontend dependencies:
   ```bash
    cd Frontend
    npm install
    npm start

## Features
- User Authentication
- Asset Management
- Asset Preview
- Content Upload
- Demo Booking
- QR code generation

## Code Overview
### Backend (Node.js/Express)
app.js: Main server setup, MongoDB connection, and route definitions.
Authentication: Sign-in and signup processes, JWT for user authentication.
Asset and Content Management: Endpoints for uploading, retrieving, and deleting assets and content.

### Frontend (React)
AuthContext.tsx: Manages user authentication state.
Layouts and Pages: Structure of the front end, including dashboard, about us, and demo booking pages.

