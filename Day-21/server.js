// Core Module Example
const os = require('os');
console.log('OS Platform:', os.platform());

// Local Module Example
const add = require("./math");
console.log(add(2, 3));

// Third-Party Modules
const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// File System Module Example
const fs = require('fs');
fs.writeFileSync('students.txt', 'Hello Students!');
console.log(fs.readFileSync("students.txt","utf-8"));
fs.appendFileSync('students.txt', ', This is appended text');
fs.unlinkSync('students.txt');


// NodeMailer
const nodemailer = require('nodemailer');
// Setup transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'divisukumar005@gmail.com',
    pass: 'wows daot ylec mduj' // Use Gmail App Password
  }
});

// Email options
let mailOptions = {
  from: 'divisukumar005@gmail.com',
  to: 'sukumardivi2005@gmail.com',
  subject: 'Node.js Email Example',
  text: 'Hello! This is a test email from Node.js'
};

// Send email
for(let i=0;i<=5;i++){
    transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
}