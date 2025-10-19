let a , b , c , d ;
a = 445;
b = 67;
c = a + b - 67 ;
d = 99 ;

let result = a - c + d - d + 445  + b - b ;

document.getElementById("demo") .innerHTML= " the  result is " +  result  ;

if (a == d) {
    document.getElementById ("demo1") .innerHTML= a + " = " + d ;
} else{
    document.getElementById ("demo2") .innerHTML= a + " = " + c ;
}

a = 45;
b = 67;
c = a + b - 67 ;
d = a ;

if ( a == c ) {
    document.getElementById ("demo3") .innerHTML= a + " = " + c ;
} else{
    document.getElementById ("demo4") .innerHTML= a + " = " + d ;
}
try {
    let a = 5 ;
    let b = 4 + e ; // e is not defined
    console.log(b);
} catch (err) {
    console.log("e is not defined");
    document.getElementById("demo5").innerHTML = "Error: " + err.message;
}

a = 50 ;
b = 50 ;
c = 100 - a - b ;
d = c ;

if ( a == c ) {
    document.getElementById ("demo3") .innerHTML= a + " = " + c ;
} else{
    document.getElementById ("demo4") .innerHTML= a + " = " + b ;
}

try {
    let a = 5 ;
    let b = 4 + f ; // f is not defined
    console.log(b);
} catch (err) {
    console.log("f is not defined");
    document.getElementById("demo5").innerHTML = "Error: " + err.message;
}