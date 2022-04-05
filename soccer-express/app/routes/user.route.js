/**
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

const express  =require('express')
const { signup } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.use(function log(req, res, next){
  console.log(' ### 회원 서버 ### ')
  next()
})

/*userRouter.post("/sign-in", (req, res)=>{
  const{id, pw} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`id 값 : ${JSON.stringify(id)}`)
  console.log(`pw 값 : ${JSON.stringify(pw)}`)  
  res.json(json)
})*/

userRouter.use((req, res) => {
  const{username, password, name, telephone} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`username 값 : ${JSON.stringify(username)}`)
  console.log(`password 값 : ${JSON.stringify(password)}`)
  console.log(`name 값 : ${JSON.stringify(name)}`)
  console.log(`telephone 값 : ${JSON.stringify(telephone)}`)
  res.json(req.body)
})

userRouter.post("/sign-up", signup)

module.exports = userRouter;