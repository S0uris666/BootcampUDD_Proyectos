const express = require("express");
const auth = require("../middleware/auth");
const { createUser, loginUser, verifyUser} = require("../controller/user.controller");
const userRouter = express.Router();



userRouter.post('/register',createUser) //http://localhost:3000/api/v1/users/register
userRouter.post('/login',loginUser) //http://localhost:3000/api/v1/users/login
userRouter.get('/verify-user',auth, verifyUser)  //http://localhost:3000/api/v1/users/verify-user



module.exports = userRouter;