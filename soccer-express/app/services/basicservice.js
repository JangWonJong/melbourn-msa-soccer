
exports.bmi = (payload) => {
    const{name, height, weight} = payload
    let _height=Number(height)
    let _weight=Number(weight)
    let bmi = _weight/Math.pow(_height,2);
    let output = Math.round(bmi*100)/100;
    const result = {name,height,weight}
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

exports.calc = (payload) => {
    const {num1, opcode, num2} = payload
    const result = {num1 , opcode , num2}
    switch (opcode){
      case "+" :
        result.calc = (num1 + num2)
        return result
      case "-" :
        result.calc = (num1 - num2)
        return result
      case "*" :
        result.calc = (num1 * num2)
        return result
      case "/" :
        result.calc = (num1 / num2)
        return result
      case "%" :
        result.calc = (num1 % num2)
        return result
    }
}
