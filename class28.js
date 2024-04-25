// // document.getElementById('img1').onmouseover = abc;

// // function abc(){
// //     document.getElementById('img1').style.filter = "grayscale(0%)"
// // }

// // document.getElementById('img1').onmouseout = xyz;

// // function xyz(){
// //     document.getElementById('img1').style.filter = "grayscale(100%)"
// // }
// document.getElementById('img1').addEventListener("mouseover", function(){
//     document.getElementById('img1').style.filter = "grayscale(0%)";
// });
// document.getElementById('img1').addEventListener("mouseout", function(){
//     document.getElementById('img1').style.filter = "grayscale(100%)";
// });

// document.getElementById('head1').addEventListener('click', function(){
//     alert("Hello World")
// })

// Second task

document.querySelector("#form").addEventListener("submit", showMessage)

document.querySelector("[type='reset']").addEventListener("click", checker)
let x = document.querySelectorAll("[type='radio']");
x.forEach((x)=>{
    x.addEventListener("click", checker);
});

function showMessage(){
    alert("Demo Data Submited");
}

function checker(){
    const btnsubmit = document.querySelector("[type='submit']");
    if(this.checked == true){
        btnsubmit.removeAttribute("disabled")
    }else{
        btnsubmit.setAttribute("disabled","");
    }
}

