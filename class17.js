



console.log("Hello World");

// let age = 101;

// if(a>=5){
//     console.log("yes");
// }else{
//     console.log("No");
// }
// if(age>=0 && age<18){
//     console.log("You are not Eligible");
// }
// else if(age >= 18 && age<=35){
//     console.log("You are Eligible for LTV");
// }else if(age>35 && age<=50){
//     console.log("You are Eligible for HTV");
// }else if(age>50 && age<=100){
//     console.log("Find some Graveyard");
// }
// else{
//     console.log("Invalid Age")
// }

// let time = new Date().getHours();
// if(time<10){
//     console.log("Good Morning")
// }else if(time>=10 && time<=20){
//     console.log("Afternoon")
// }else{
//     console.log("evening")
// }
// function myfun(){
//     let name = document.getElementById("val1").value;

//     let text;

//     if(name === "a"){
//         text = "Yes You enter correct value";
//     }else if(name=== "b" || name==="c" ){
//         text = "Yes are wrong again";
//     }else{
//         text = "Yes you are win";
//     }
//     document.getElementById("para").innerHTML = text;
// }
// function myfun(){
//     let name = document.getElementById("val1").value;
//     let text;
    // if (name>=1 && name<=10){
    //     text="Valid Input"
    // }
    // if (isNaN(name) || name <1 || name> 10){
    //     text="InValid Input";
    // }
    // else {
    //     text="Valid Input"
    // }
    // document.getElementById("para").innerHTML = text;
    
// }
let a = new Date().getDay();
let day;
switch(a){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

}
document.getElementById("para").innerHTML = day;