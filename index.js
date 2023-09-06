

// // /CURSOR
// var cursor = document.querySelector("#cursor")

// document.addEventListener("mousemove", function (dets) {
//     // X AXIX HORIZONTAL AND Y AXIS VERTICAL
//     cursor.style.left = dets.x + 30 + "px"
//     cursor.style.top = dets.y + "px"

// })

// // FOR BLURING CURSOR 
// var cursorblur = document.querySelector("#cursorblur")

// document.addEventListener("mousemove", function (dets) {

//     // x and y axis pr cursor blur jo he wo boht topleft corner se neeche chl rha tha top x and y axis pr -150opx krqa diya to cursor ke sth sth movekreega 

//     cursorblur.style.left = dets.x - 190 + "px"
//     cursorblur.style.top = dets.y - 190 + "px"


// })

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 190 + "px";
  blur.style.top = dets.y - 190 + "px";
});


// FOR SEARCH BAR ON NAV WON CUIRSOR 
var h4all = document.querySelectorAll("#nav h4")
// abh  every h4 is an elem asit itself bnvz in for eachloop we define it 
h4all.forEach(function (elem) {

    // jbh jbh mouse enter hota h4 pr to 
    elem.addEventListener("mouseenter", function () {
        // jbh jbhynh4 pr aeega curorka size bada kr do
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"

    })

    // FOR COMING BACK THE MOUSE TO ITS ORIGINAL POSITION 

    elem.addEventListener("mouseleave", function () {
        // jbh jbhynh4 pr aeega curorka size bada kr do
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"

    })

})




// FOR NAVBAR ANIMATION 

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    // on the basis of scrolling
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1.3,
    }

})

// NOW TARGETING MAIN  PAGE WHEN WE SCROLL AND PAGE COLOR TURNS TO BLACK


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }

})



// SCROLL TRIGGER ON ABOUT US 

gsap.from("#about-us img,#aboutus-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    // aik aik kr ke neechee se upr ki trf aeen means ke each element kjomovekrne ka kamstagger krta he 
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }


})

// SCROLL TROGGER ON CARDS 

// gsap.to(".cards", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 0.8,


//     // aik aik kr ke neechee se upr ki trf aeen means ke each element kjomovekrne ka kamstagger krta he 
//     scrollTrigger: {
//         trigger: ".cards",
//         scroller: "body",
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 2,



//     }



// })



// scrollinmg on colons


gsap.from("#colon1", {
    y: -70,
    x : -70,
   
    // aik aik kr ke neechee se upr ki trf aeen means ke each element kjomovekrne ka kamstagger krta he 
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }


})

gsap.from("#colon2", {
    y: 80,
    x : 80,
   
    // aik aik kr ke neechee se upr ki trf aeen means ke each element kjomovekrne ka kamstagger krta he 
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }


})


// GSAP ON ELEM PASRT

gsap.from("#page4 h1", {
    y: 50,
   
   
    // aik aik kr ke neechee se upr ki trf aeen means ke each element kjomovekrne ka kamstagger krta he 
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 5
    }


})


