function sumDigits(num) {
  let digits = num.toString().split(''); 
  return digits.reduce((sum, digit) => sum + Number(digit), 0);
}

