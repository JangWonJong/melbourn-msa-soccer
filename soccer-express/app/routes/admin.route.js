const express = require('express')
const adminRouter = express.Router()

adminRouter.use((req, res, next)=>{
    console.log(' ### 관리자 서버 ### ')
    next()
})

adminRouter.post('/')

module.exports = adminRouter;