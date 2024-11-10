function reverterArray<T>(items: T[]): T[] {
    let filteredItems: any;

    if (items.every(item => typeof item === "number")) {
       filteredItems = items.map(item => item * 10);
    } else {
        filteredItems = items;
    }
    
    return filteredItems.reverse();
   }
   
console.log(reverterArray([1, 2, 3])); 
console.log(reverterArray(["a", "b", "c"])); 
console.log(reverterArray([1,"a","b",true,4,"d",undefined,4]));
