/* **PROBLEM 3**

The area of an equilateral triangle is ¼(√3a2) where "**a**" represents a side of the

triangle. You are provided with the side "**a**". Find the area of the equilateral triangle.

**Input Description:** ꢀ

The side of an equilateral triangle is provided as the input.

**Output Description:** ꢀ

Find the area of the equilateral triangle and print the answer up to 2 decimal places

after rounding off.

**Sample Input :**

20 */
function area(side){
           return Math.sqrt(3)/4*side*side;
  }
  let Area = area(20).toFixed(2);
  console.log(Area);



 //different

// let areaa= 200
// let sidee=(3)/4*areaa*areaa ;
// let ans=Math.sqrt(sidee).toFixed(2);
// console.log(ans);