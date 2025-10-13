// Statement :

// Write a program in which input a string from the user and use a for...of loop to count the number of vowels in the string.

function countVowels() {
   let count = 0;
   let str = prompt("Enter any string : ");
   console.log('The string is : ' + str);

   for (const output of str) {
      if (output == 'a' || output == 'e' || output == 'i' || output == 'o' || output == 'u' || output == 'A' || output == 'E' || output == 'I' || output == 'O' || output == 'U') {
         count++;
      }
   }
   console.log("Number of vowels: " + count);
}