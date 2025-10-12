function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone-no").value;
  let country = document.querySelector(".country1").value;
  // confusion 6 clear successfully
  // ye sub select kar sacta ha id , class , tag , attribute
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
  //charAt letter to pick karta ha or (0) is ko btata ha ke kon sa letter pick karna ha 0 = first letter

  let firstLetter = name.charAt(0);
  console.log("First letter of Name:", firstLetter);

  if (firstLetter !== firstLetter.toUpperCase()) {
    //confusion 5 clear successfully
    // ye condition meine isliye lagaye ha take aghar first letter is se match kar jaye
    //  === to ye true ho gaye warna ni
    // firstLetter !== firstLetter.toUpperCase() is ka kaam ha ke first letter variable
    // ko check kar ke btaye ke true ha ke false
    // aghar true to is ka mutlab ha first letter jo user ne likha wo capital ha
    // aghar capital ni ho ga to false ho jaye ga or alert dekhaye ga
    // alert("First letter of Name must be capital.");

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
    // is ka mutlab ha ke aghar email @ ha to wo true hota aghar ! ye na likha hota
    alert("Invalid Email format!");
    console.log("Email does not contain @");
    return false;
  }

  // 3️⃣ Phone number check (+92 se start aur 10 digits baad)
  if (phone === "") {
    alert("Phone number is required!");
    console.log("Phone is empty");
    return false;
  }
  if (!phone.startsWith("+92")) {
    //confusion 3 clear successfully
    // ye bhi same upper wale confusion ki tarah ha bus property change ha
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