// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(obj = "*") {
  return function (msg = "special") {
    return `You are ${obj}${msg}${obj}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

function actionApplyer(start_int, func_array) {
  let a = start_int

  for (let i = 0; i < func_array.length; i++) {
    a = func_array[i](a)
  }
  return a
}