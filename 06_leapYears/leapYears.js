const leapYears = function (year) {
  const isYearDividedBy4 = year % 4 === 0;
  const isYearDividedBy100 = year % 100 === 0;
  const isYearDividedBy400 = year % 400 === 0;
  // no need to write true:false
  return isYearDividedBy4 && (!isYearDividedBy100 || isYearDividedBy400);
};

// Do not edit below this line
module.exports = leapYears;
