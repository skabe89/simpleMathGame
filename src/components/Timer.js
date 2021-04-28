import React, {useState, useEffect} from 'react'


export default function Timer() {
  
  const [time, setTime] = useState(0)
  const [variableX, setVariableX] = useState(0)
  const [variableY, setVariableY] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [score, setScore] = useState(0)
  const [sign, setSign] = useState(0)

  const operators = ["+", "-", "*"]
  const operatorNames = ["ADDITION", "SUBTRACTION", "MULTIPLICATION"]


  const countDown = () => {
    console.log(time)
    setTime(time - 1)
  }

  let resetX = () => {
    setVariableX(Math.floor(Math.random() * 10))
  }

  let resetY = () => {
    setVariableY(Math.floor(Math.random() * 10))
  }

  let randomOperator = () => {
    setSign(Math.floor(Math.random() * 3))
  }
  const resetNums = () => {
    resetX()
    resetY()
  }

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    checkAnswer()
    setAnswer("")
  }

  const changeOperator = () => {
   sign < 2 ? setSign(sign + 1) : setSign(0)
  }

  const solution = (sign) => {
    switch(sign){
      case "+":
        return parseInt(variableX) + parseInt(variableY);
      case "-":
        return parseInt(variableX) - parseInt(variableY);
      case "*":
        return parseInt(variableX) * parseInt(variableY);
      default:
        return sign
    }
  }

  const checkTimeOver = () => {
    if(time <= 1){
      setScore(0)
    }
  }

  const checkAnswer = () => {
    if(solution(operators[sign]) == answer){
      setTime(time + 5)
      setScore(score + 1)
      resetNums()
      randomOperator()
    }
    else{
      console.log(solution())
      console.log(answer)
      setTime(time - 3)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(time>=1){
        checkTimeOver()
        countDown()
      }
    }, 1000)
    return () => clearInterval(interval)
  })


  return (
    <div className="problem-div">
      <h1>{operatorNames[sign]}</h1>
      <h2>Time: {time}</h2>
      <h2>Your Score: {score}</h2>
      <h1>{variableX} {operators[sign]} {variableY} = ? </h1>
      <form onSubmit={handleSubmit}>
        <input name="answer" onChange={handleChange} value={answer} />
        <input type="submit" value="Submit Answer"/>
      </form>
      <h3> <button onClick={resetNums}> New Problem </button> </h3>
      <h3><button onClick={changeOperator}>CHANGE TO {sign <= 1 ? operatorNames[sign + 1] : "ADDITION"}</button></h3>
    </div>
  )
}
