// **PROBLEM 6**

// Write a code to get an integer N and print the sum of values from 1 to N.

// **Input Description:** ꢀ

// A single line contains an integer N.

// **Output Description:** ꢀ

// Print the sum of values from 1 to N.

// **Sample Input :**

// 10

// **Sample Output :** 55

function testFunc1(Num) {
var X=0;
for (var i=0;i<=Num;i++){
    X=X+i;
};
return X;
};
var y = testFunc1(10);
console.log(y)
