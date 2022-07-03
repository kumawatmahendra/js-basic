/**PROBLEM 12**

Simi is learning about palindromic numbers. Her teacher gave him the task to count

all palindromic numbers present in that range.Simi has told you about this and want

your help. You design an algorithm in order to help simi.

**Input Description:** ꢀ

You will be given a number ‘n’

**Output Description:** ꢀ

Print the count of all palindromic numbers till ’n’(inclusive)

**Sample Input :**

5

**Sample Output :**

5 */

function nDigitPalindromes(n)
{
    return (5 * Math.pow(10, parseInt((n - 1) / 20)));
}

console.log(nDigitPalindromes(5));


