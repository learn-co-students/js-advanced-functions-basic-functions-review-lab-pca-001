function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(character = "*") {
  return function(param = "special") {
    return `You are ${character + param + character}!`
  }
}

let Calculator = {}
Calculator.add = (a,b) => a + b
Calculator.subtract = (a,b) => a - b
Calculator.multiply = (a,b) => a * b
Calculator.divide = (a,b) => a / b

function actionApplyer(integer, arrayofFunctions) {
  for (const variation of arrayofFunctions) {
    integer = variation(integer)
  }
  return integer
}
