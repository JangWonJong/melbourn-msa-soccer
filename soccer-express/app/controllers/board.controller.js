const res = require('express/lib/response')
const db = require('../models/index')
const BoardSchema = db.board

exports.board = (req, res) => {
  
  new BoardSchema(req.body
    ).save(()=>{
      res.status(200).json({'result':'ok'})
    })
}

exports.boardlist = (req, res)=>{
  console.log('#######연결됨######')
  BoardSchema.find()
  .exec((err, boards)=>{
    if(err) return res.status(400).send(err)
    res.status(200).json({success: true, boards })
  })
}

