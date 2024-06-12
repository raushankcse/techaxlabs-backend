import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next)=>{
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if(!token){
    return res.status(401).json({error: 'No token provied'});
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
    if(err){
      console.error('Token verification failed:', err);
      return res.status(403).json({error: 'Token verification failed', details: err.message});
    }
    req.user = decoded;
    next();
  })
};

export default authenticateToken;