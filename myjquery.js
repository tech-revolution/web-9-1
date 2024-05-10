


console.log("JQuery")
// console.log($)

// $(selector).action()
// Types of Selectors in jQuery
// 1. Element Selector
// 2. Id Selector
// 3. Class Selector

$(document).ready(function(){

    // Element Selector
    // $('p').click(function(){
    //     console.log("You clicked")
    //     $('p').hide()
    // })
    // // $('p').click()


    // Id Selectors
    // $('#btn1').click(function(){
    //     $('p').hide()
    // })
    // $('#btn2').click(function(){
    //     $('p').show()
    // })
    // $('#btn').click(function(){
    //     $('p').toggle(1000)
    // })
    // $('#btn').click(function(){
    //     $('p').slideToggle(1000)
    // })
    // $('#btn').click(function(){
    //     $('#div1').animate({
    //         // left:"120px",
    //         width:"+=100px",
    //         height:"+=100px"
    //     })
    // })
    // $('#btn').click(function(){
    //     $('#div1').slideToggle(5000)
    // })
    // $('#stop').click(function(){
    //     $('#div1').stop()
    // })
    $('#btn').click(function(){
        $('#div1').hide("slow", function(){
            alert("Data is hide")
        })
        
    })


})
