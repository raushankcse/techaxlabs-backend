import prisma from '../config/db.config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
  const {username, email, password} = req.body;

  try{

    const existingUserByEmail = await prisma.user.findUnique({
      where:{
        email
      },
    });

    const existingUserByUsername = await prisma.user.findUnique({
      where:{
        username
      },
    });

    if(existingUserByEmail){
      return res.status(400).json({error: 'Email alread exists'});
    }

    if(existingUserByUsername){
      return res.status(400).json({error: 'Username already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data:{
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({message: 'User registered successfully!'});
  } catch (err){
    res.status(500).json({error: err.message});
  }
};


export const login = async (req, res) => {
  const {email, password} = req.body;

  try{
    const user = await prisma.user.findUnique({
      where:{
        email
      }
    });

    if (user && (await bcrypt.compare(password, user.password))){
      const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
      res.status(200).json({message: 'Logged in successfully!', token});
    } else{
      res.status(401).json({error: 'Invalid email or password'});
    }
  } catch(err){
    res.status(500).json({error: err.message});
  }
}

