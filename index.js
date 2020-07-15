// Your code here
// Function Declaration
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
// Function Expression
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(spice="*") {
  return function(adjective="special") {
    return `You are ${spice}${adjective}${spice}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}

function actionApplyer(integer, arrayoffunctions) {
  for (const varfunction of arrayoffunctions) {
    integer = varfunction(integer)
  }
  return integer
}

