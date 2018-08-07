const armstrongNumbers = () => {};

armstrongNumbers.validate = number =>
number === number.toString().split('').reduce (
  (total, digit, index, digitList) =>
  total + (parseInt(digit, 10) ** digitList.length), 0);

module.exports = armstrongNumbers;
