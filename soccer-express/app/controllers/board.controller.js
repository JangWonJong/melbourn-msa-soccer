exports.write = (req, res)=>{
    const{passengerId, name, teamId, subject} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`passengerId 값 : ${JSON.stringify(passengerId)}`)
    console.log(`name 값 : ${JSON.stringify(name)}`)
    console.log(`teamId 값 : ${JSON.stringify(teamId)}`)
    console.log(`subject 값 : ${JSON.stringify(subject)}`)
    res.status(200).json({'result' : 'ok'})
  }