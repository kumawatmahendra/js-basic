// **PROBLEM 4**

// You will be provided with a number. Print the number of days in the month

// corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range

// print "Error".

// **Input Description:** ꢀ

// Input n -> month number

// **Output Description:** ꢀ

// Find the days in the month corresponding to the input number. Print Error if the input

// is not in a valid range.

// **Sample Input :**

// 8

// **Sample Output :**

// 31



  function getDate(month,year){
   return new Date(year,month,0).getDate();
  
  
 } 
 let ans=getDate(8,2022)
 console.log(ans)


