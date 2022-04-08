import axios from "axios";
import style from "board/style/board-form.module.css"
import React, { useState } from 'react'

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {passengerId,  name, teamId} = inputs;
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`등록 팀 정보 : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/board/board', inputs)
        .then(res => {
            alert(JSON.stringify(res.data))
        })
        .catch(err => alert(err))       
    }
    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs, [name]: value
        })
    }
  
    return (<>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">작성자 ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="passengerId" name="passengerId" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">작성자</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={onChange}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">팀명</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={onChange}>
                    <option value="K09" >FC 서울</option>
                    <option value="K02" >수원 삼성 블루윙즈</option>
                    <option value="K04" >인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" style={{height:200 + "px"}} onChange={onChange}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
            <input type="submit" onClick={handleSubmit} className={style.inputSubmit} 
             value="Submit"/>
            
            </div>
            </htmlForm>
            </div>
    </>)
}