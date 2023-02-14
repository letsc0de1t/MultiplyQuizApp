var number1 = document.getElementById("number1")
var number2 = document.getElementById("number2")
var score = document.getElementById("score")
var a
var b
var scoreCount=0
var input = document.getElementById("answer")


const updateQuestion = () =>{
  a = Math.floor(Math.random()*10+1)
  b = Math.floor(Math.random()*10+1)
 number1.innerText = a
 number2.innerText = b
 input.value = ""
}


const submitAnswer = () =>{
   var answer = input.value
   if(a*b === Number(answer))
     scoreCount++
   else
     scoreCount--
   score.innerText = scoreCount
   updateQuestion()
   
}

updateQuestion()