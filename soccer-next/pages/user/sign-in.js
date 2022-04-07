import axios from 'axios';
import React, { useState } from 'react'

export default function Login () {
  
    const [inputs, setInputs] = useState({})
    const {id, pw} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...setInputs, [name]: value})    
    }
    const handleSubmit = async e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/', inputs)        
        .then(res => {
            
        })
        .catch(err => console.log(`에러발생 : ${err}`))
    }
        
    return (<><h1>로그인</h1>
        <form>         
        <div>
            <label htmlFor=""><b>Username</b></label><br/>
            <input name='id' type="text" placeholder='아이디' onChange={handleChange}/><br/>
            <label htmlFor=""><b>Password</b></label><br/>
            <input name ='pw' type="password" placeholder='비밀번호' onChange={handleChange}/><br/>
            <button onClick={handleClick}>로그인</button><br/>    
                                                   
        </div>
        </form>                
        </>    
    

    )
}

