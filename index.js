function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity ="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(iHateFlair = "*") {
  return function (msg = "special") {
    return `You are ${iHateFlair}${msg}${iHateFlair}!`
  }
}

const Calculator = {
  add: function(x, y) {
    return x + y
  },
  subtract: function(q, z) {
    return q - z
  },
  multiply: function(j, h) {
    return j * h
  },
  divide: function (l, t) {
    return l / t
  },
}

function actionApplyer(k, array) {
  for (const func of array) {
    k = func(k)
  }
  return k
}