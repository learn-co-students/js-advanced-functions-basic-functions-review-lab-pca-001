// Your code here
function saturdayFun(string="roller-skate") {
  return `This Saturday, I want to ${string}!`
}

function mondayWork(string="go to the office") {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(string="*") {
  return function(param="special") {
    return `You are ${string}${param}${string}!`
  }
}

const Calculator = {
  add : function(num1, num2) {
    return num1 + num2
  },
  subtract : function(num1, num2) {
    return num1 - num2
  },
  multiply : function(num1, num2) {
    return num1 * num2
  },
  divide : function(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(i, arr) {
  for (const func of arr) {
    i = func(i)
  }
  return i
}