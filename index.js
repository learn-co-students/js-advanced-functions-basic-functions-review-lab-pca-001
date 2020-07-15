// Your code here
const saturdayFun = (arg='roller-skate') => `This Saturday, I want to ${arg}!`;

const mondayWork = (arg='go to the office') => `This Monday, I will ${arg}.`;

const wrapAdjective = (flair='*') =>  (arg="special") =>`You are ${flair}${arg}${flair}!`;

const Calculator = {
  add: (a,b) => a + b,
  subtract: (a,b) => a - b,
  multiply: (a,b) => a * b,
  divide: (a,b) => a / b,
};

const actionApplyer = (val, arr) => {
  arr.forEach( (fcn) => val = fcn(val));
  return val;
};