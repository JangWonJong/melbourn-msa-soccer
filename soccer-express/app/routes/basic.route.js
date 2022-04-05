const express = require('express')
const basicRouter = express.Router()

basicRouter.use((req, res, next)=>{
    console.log(' ### 기본 서버 ### ')
    next()
})

basicRouter.post('/bmi')

module.exports = basicRouter;