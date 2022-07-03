/* *PROBLEM 14**

You are given with an array. Your task is to print the left rotated array after k

opearations. Time:O(n) Extra Space: O(1)

**Input Description:** ꢀ

First line contains two number ‘n’ and ‘k’.Next line contains n space separated

numbers.

**Output Description:** ꢀ

Print the array as mentioned.

**Sample Input :**

7 3

1 2 3 4 5 6 7

**Sample Output :**

4 5 6 7 1 2 3*/
function numberOfDigit(N){
    let digit = 0;
    while (N>0){
        digit++;
        N = Math.floor(N / 10);

    }
};
function rotateNumberByK(N,K){
    let x= numberOfDigit(N);

    K=((k%x)+x)%x;
    let left_no=Math.floor(N /math.floor(math.pow(10,x-k)));
    N= N % Math.floor(Math.pow(10, x - k));
    let left_digit = numberOfDigit(left_no);
    N=(N*Math.floor(MAth.pow(10,left_digit)))+left_no;
    console.log(N);
}
rotateNumberByK(N,K);
