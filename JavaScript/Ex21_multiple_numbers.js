function multiples(num1, num2) {
   if (num1 === 0 || num2 === 0) {
    return num1 === 0 && num2 === 0;
   }
   
   return num1 % num2 == 0 || num2 % num1 == 0;
}

