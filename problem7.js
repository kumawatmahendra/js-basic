/* **PROBLEM 7**

You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,

36, 49, 64, 81, .......

(Print "***Error***" if **N** = negative value and 0 if **N** = 0).

**Input Description:** ꢀ

An integer N is provided to you as the input.

**Output Description:** ꢀ

Find the Nth term in the provided series.

**Sample Input :**

18

**Sample Output :**

324 */
function FindN(n){
    
    if (n<0){
        console.log("Error"); 
    }
    else if(n>0){
        return Math.pow(n, 2);
    };
};
console.log(FindN(18));