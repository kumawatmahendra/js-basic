/***PROBLEM 1**

You are provided with a number, "**N**". Find its factorial.

**Input Description:** ꢀ

A positive integer is provided as an input.

**Output Description:** ꢀ

Print the factorial of the integer.

**Sample Input :**

5

**Sample Output :**

120 */

let number= 5;
let fact= 1;
if(number==0){
  console.log(`this l ${number}is fectoria number`)
} 
else if(number <0){
  console.log(`this ${number} is fectorial ${fact}`)
}
else{
  for(i=1;i<=5;i++)
    {
    fact*=i;
    }
  console.log(`the fectorial of  ${number} is ${fact}`)
}