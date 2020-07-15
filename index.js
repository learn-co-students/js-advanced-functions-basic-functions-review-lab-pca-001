function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
  return function(param = "special") {
    return (`You are ${string+param+string}!`)
  }
}

let Calculator = {}
Calculator.add = (a,b) => a + b
Calculator.subtract = (a,b) => a - b
Calculator.multiply = (a,b) => a * b
Calculator.divide = (a,b) => a / b

function actionApplyer(integer, functions) {
  let result = integer
  for(const func of functions) {
    result = func(result)
  }
  return result
}