import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("Connected to db");
      })
      .catch((err) => {
        console.log("Error");
        throw err;
      });
  };

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hi");
});
app.post("/getPassword", (req, res) => {
  const passwordLength = req.body.passwordLength; 
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/';

  const getRandomCharacter = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  let password ="" ;

  password += getRandomCharacter(uppercaseLetters);
password += getRandomCharacter(lowercaseLetters);
password += getRandomCharacter(numbers);
password += getRandomCharacter(symbols);

// Generate remaining characters randomly
const remainingLength = passwordLength - 4;
for (let i = 0; i < remainingLength; i++) {
  const characterType = Math.floor(Math.random() * 4); // 0: uppercase, 1: lowercase, 2: numbers, 3: symbols

  switch (characterType) {
    case 0:
      password += getRandomCharacter(uppercaseLetters);
      break;
    case 1:
      password += getRandomCharacter(lowercaseLetters);
      break;
    case 2:
      password += getRandomCharacter(numbers);
      break;
    case 3:
      password += getRandomCharacter(symbols);
      break;
    default:
      break;
  }
}
  
 
  
console.log(password,"password");
  res.json({ password });
});

app.listen(5000, () => {
    connect();
  console.log("Server is starting");
});
