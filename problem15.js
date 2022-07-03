/**PROBLEM 15**

You are given a postfix expression. Evaluate the given expression and print the result.

**Input Description:** ꢀ

The first line of the input is a string N, containing operators and numbers seperated by

the single space which forms a postfix expression.

**Output Description:** ꢀ

Evaluate the post expression and print the result.

**Sample Input :**

5 3 1 \* + 9 -

**Sample Output :**
-1 */


let arr1=[];
for(let i=0;i<arr1.length;i++)
{
if(arr[i]>=0 && arr[i]<=9)
{
arr1.push(arr[i]);
}
else
{
let c;
let a=arr1.pop()
let b=arr1.pop()
let a1=arr[i];

switch (a1)
{
case "+":
c=b+a;
arr1.push(c)
break;
case "-":
c=b-a;
arr1.push(c)
break;
case "*":
C=b*a;
arr1.push(c)
break;
case "/":
c=b/a;
arr1.push(c)
break;
case"^":
c=Math.pow (a,b)
arr1.push(c)
break;
default:
c=0;
}
}
  return(arr1);

}
let arr=[5,3,1,"*","+",9,"-"];
console.log(arr1);