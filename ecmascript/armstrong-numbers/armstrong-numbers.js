const ArmstrongNumber = () => {};

ArmstrongNumber.validate = number =>
number === [...number.toString()].reduce (
  (total, digit, index, digitList) =>
  total + (parseInt(digit, 10) ** digitList.length), 0);

  export default ArmstrongNumber;