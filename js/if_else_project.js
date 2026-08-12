function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone-no").value;
  let country = document.querySelector(".country1").value;
  // confusion 6 clear successfully
  let address = document.getElementById("address").value;
  let age = document.getElementById("age").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Country:", country);
  console.log("Address:", address);
  console.log("Age:", age);

  // 1️⃣ Name check - first letter must be capital
  if (name === "") {
    alert("Name is required!");
    console.log("Name is empty");
    return false;
  }

  //confusion 1 clear successfully

  let firstLetter = name.charAt(0);
  console.log("First letter of Name:", firstLetter);

  if (firstLetter !== firstLetter.toUpperCase()) {
    //confusion 5 clear successfully

    alert("First letter of Name must be capital.");
    console.log("Name first letter is not capital");
    return false;
  }

  // 2️⃣ Email check
  if (email === "") {
    alert("Email is required!");
    console.log("Email is empty");
    return false;
  } else if (!email.includes("@")) {
    //confusion 2 clear successfully
    alert("Invalid Email format!");
    console.log("Email does not contain @");
    return false;
  }

  if (phone === "") {
    alert("Phone number is required!");
    console.log("Phone is empty");
    return false;
  }
  if (!phone.startsWith("+92")) {
    //confusion 3 clear successfully
    alert("Phone number must start with +92");
    console.log("Phone does not start with +92");
    return false;
  }

  //confusion 4 clear successfully
  if (phone.slice(3).length !== 10) {
    alert("Phone number must have 10 digits after +92");
    console.log("Phone length after +92 is incorrect:", phone.slice(3).length);
    return false;
  }

  // 4️⃣ Country check
  if (country === "Select a country") {
    alert("Please select a country.");
    console.log("Country not selected");
    return false;
  }

  // 5️⃣ Address check
  if (address === "") {
    alert("Address is required!");
    console.log("Address is empty");
    return false;
  }

  // 6️⃣ Age check
  if (age === "") {
    alert("Age is required!");
    console.log("Age is empty");
    return false;
  }
  if (age < 0) {
    alert("Please enter a valid age.");
    console.log("Invalid age less than 0");
    return false;
  }
  if (age < 18) {
    alert("You must be at least 18 years old.");
    console.log("Age is less than 18");
    return false;
  }

  // ✅ Sab sahi hone par
  alert("Form submitted successfully!");
  console.log("Form submitted successfully!");
  return true;
}
//Confusions : all clear

// 1. let firstLetter = name.charAt(0); ok

// 2. (!email.includes("@")) ok

// 3. (!phone.startsWith("+92")) ok

// 4. (phone.slice(3).length !== 10)
// console.log("Phone length after +92 is incorrect:", phone.slice(3).length); ok

// 5.if (firstLetter !== firstLetter.toUpperCase()) ok

// 6.document.querySelector what's it purpose  ok
