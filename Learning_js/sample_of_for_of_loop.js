function countVowels() {
     let count = 0, count_of_number_of_elements = 0;
     str = document.getElementById("string").value;
     console.log('The string is : ' + str);

     for (const output of str) {
          if (str != null) {
               count_of_number_of_elements++;
          }
          if (output == 'a' || output == 'e' || output == 'i' || output == 'o' || output == 'u' || output == 'A' || output == 'E' || output == 'I' || output == 'O' || output == 'U') {
               count++;
          }
     }
     console.log("Number of vowels is : " + count);
     console.log("Number of elements is : " + count_of_number_of_elements);

     document.getElementById("heading").innerHTML = "<hr> Output : "
     document.getElementById("output").innerHTML = "  &emsp; Number of vowels is : " + count + "<br>  &emsp; Number of elements is : " + count_of_number_of_elements + "<hr>"
}