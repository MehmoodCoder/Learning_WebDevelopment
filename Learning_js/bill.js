function bill() {
   let bill, unit_Price

   let user_type = document.getElementById("user_Type").value

   let i
   while (user_type != "H" && user_type != "C") {
      console.log(user_type)
      user_type = prompt("You Enter Wrong User Type !")
      i++
      if (user_type == "H" || user_type == "C") {
         break
      }
   }

   document.getElementById("user_Type").value = user_type
   console.log(user_type)

   let consumed_units = document.getElementById("Consumed_units").value

   let j = 0
   while (consumed_units < 0 || !/^\d+$/.test(consumed_units)) {
      console.log(consumed_units)
      consumed_units = prompt("You Enter invalid Consumed Units !")
      j++
      if (consumed_units >= 0 && /^\d+$/.test(consumed_units)) {
         break
      }
   }

   consumed_units = parseInt(consumed_units)
   document.getElementById("Consumed_units").value = consumed_units
   console.log(consumed_units)

   if (consumed_units <= 200) {
      if (user_type == "H") {
         unit_Price = 12
      } else if (user_type == "C") {
         unit_Price = 15
      } else {
         console.log("You enter wrong data")
      }
   } else if (consumed_units > 200 && consumed_units <= 400) {
      if (user_type == "H") {
         unit_Price = 15
      } else if (user_type == "C") {
         unit_Price = 20
      } else {
         console.log("You enter wrong data")
      }
   } else if (consumed_units > 400) {
      if (user_type == "H") {
         unit_Price = 20
      } else if (user_type == "C") {
         unit_Price = 24
      } else {
         console.log("You enter wrong data")
      }
   } else {
      console.log("You enter wrong data")
   }

   bill = consumed_units * unit_Price 
   document.getElementById("bill_displays").innerText = "Your bill is " + bill
   console.log(bill)
}
// copy paste all Bs5 and this js code under
let tooltipTriggerList = [].slice.call(
   document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById("mySwitch").addEventListener(
   "change",

   function () {
      document.body.classList.toggle("dark-mode")
   }
)