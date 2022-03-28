import { useState } from 'react'

export default function Calc (){

    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1,  opcode, num2} = inputs;

    const sum = () => {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1) + Number(num2))
        
    } 

    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick =(e) =>{
        e.preventDefault()
        alert(`계산 결과 : ${result}`)
        
    }  
        
    return<><h1>계산기</h1>
        <form action="">
                
                    <label htmlFor=""><b>num1</b></label><br/>               
                    <input name="num1" type="text" onChange={handleChange} /><br/> 

                    <label htmlFor=""><b>opcode</b></label><br/>
                    <select name="opcode" id="" onChange={handleChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        <option value="%">%</option>
                    </select><br/>
                    
                    <label htmlFor=""><b>num2</b></label><br/>
                    <input name="num2" type="text" onChange={handleChange} /><br/> 

                    <button onClick={handleClick}>전 송</button><br/>
                    <div>계산 결과: {result} </div>
                    </form>
                                     
                    </>                   
            
    
}  