const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require('cors');
const fs = require('fs');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

const allowedOrigins = ['http://localhost:3000','https://unicodewebdesign.com','http://localhost:31841'];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Allow all origins during development
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true, // Allow cookies for authenticated requests (if applicable)
}));

// Configure multer to use original filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/uploader"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.json({
      message: "File uploaded successfully!",
      filename: req.file.originalname,
    });
  } else {
    res.status(400).json({
      message: "No file uploaded!",
    });
  }
});

app.get('/images', (req, res) => {
  const imagesPath = path.join(__dirname, 'public', 'uploader');
  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).json({ message: 'Error fetching images' });
    } else {
      res.json(files);
    }
  });
});

app.delete('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'public', 'uploader', filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      res.status(500).json({ message: 'Error deleting image' });
    } else {
      res.json({ message: 'Image deleted successfully' });
    }
  });
});

const connection = mysql.createConnection({
  host: 'kamet.liara.cloud',
  user: 'root',
  password: 'K6cTEakbXr3EsFQ4vMBz8W0d',
  database: 'gifted_shamir',
  port: '31841'

});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});


// استفاده از body-parser برای پردازش داده‌های JSON
app.use(bodyParser.json());

// New endpoint to retrieve posts
app.get('/getPosts', (req, res) => {
  const getPostsQuery = 'SELECT * FROM posts'; // You can modify this to filter or sort posts

  connection.query(getPostsQuery, (error, results) => {
    if (error) {
      console.error('Error fetching posts:', error);
      res.status(500).send('Error fetching posts');
    } else {
      res.json(results); // Send the retrieved posts data
    }
  });
});


app.get('/getadmin', (req, res) => {
  const getPostsQuery = 'SELECT * FROM admin'; // You can modify this to filter or sort posts

  connection.query(getPostsQuery, (error, results) => {
    if (error) {
      console.error('Error fetching posts:', error);
      res.status(500).send('Error fetching posts');
    } else {
      res.json(results); // Send the retrieved posts data
    }
  });
});

app.post('/addPost', (req, res) => {
  const {metatitle,metadescription,h1title,mainimg,text,keyword,link,shorttext} = req.body;
  const addPlansQuery = 'INSERT INTO posts (metatitle,metadescription,h1title,mainimg,text,keyword,link,shorttext) VALUES (?, ?, ?, ?, ?,?,?,?)';
  
  connection.query(addPlansQuery, [metatitle,metadescription,h1title,mainimg,text,keyword,link,shorttext], (error, results) => {
    if (error) {
      console.error('Error adding plan:', error);
      res.status(500).send('Error adding plan');
    } else {
      res.status(200).send('Plan added successfully');
    }
  });
});

app.listen(31841, () => {
  console.log("Server running on port 31841");
});
