require('dotenv').config()
var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const { port, MONGO_URI } = process.env
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
var corsOptions = {
  origin: `http://localhost:3000`,
  optionsSuccessStatus: 200
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))               
app.listen(port, () => {
    console.log({"현재 시간 : ":new Date().toLocaleString()})
})

app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions), (req, res)=> {
  res.json({"now": new Date().toLocaleString()})
})

app.get('/', (req, res) => {
    res.json({"현재 시간 : ":new Date().toLocaleString()})
  })
app.get('/api/now', cors(corsOptions), (req, res)=> {
  res.json({"now": new Date().toLocaleString()})
})

app.post("/api/board/write", (req, res)=>{
  const{passengerId, name, teamId, subject} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`passengerId 값 : ${JSON.stringify(passengerId)}`)
  console.log(`name 값 : ${JSON.stringify(name)}`)
  console.log(`teamId 값 : ${JSON.stringify(teamId)}`)
  console.log(`subject 값 : ${JSON.stringify(subject)}`)
  res.json(req.body)
})
app.post("/api/basic/write", (req, res)=>{
  const{name, height, weight} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`name 값 : ${JSON.stringify(name)}`)
  console.log(`height 값 : ${JSON.stringify(height)}`)
  console.log(`weight 값 : ${JSON.stringify(weight)}`)
  const json = computeBMI(name, height, weight)
  res.json(json)
  
})

function computeBMI({name, height, weight}){
  let _height=Number(height)
  let _weight=Number(weight)
  let bmi = _weight/Math.pow(_height,2);
  let output = Math.round(bmi*100)/100;
  const result = {name}
  if (output<18.5)
    result.bmi = "Underweight";
  if (output>=18.5  && output<=25)
    result.bmi = "Normal";
  if (output>=25 && output<=30)
    result.bmi = "Obese";
  if (output>30)
    result.bmi = "Overweight";
  return result
}

/*app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())*/



