function isOrdered(list) {
   for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i+1]) {
        return false;   
    }
   }
   return true;
}   