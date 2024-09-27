gsap.from(".banner-section a, .text-rejoice", {
    scale: 0,
    y:120,
    repeat:1,
    delay: 0.2,
    duration: 2,
    stagger: 0.1,
    opacity: 0,
})

gsap.from(".repeated-heading", {
    scale: 0,
    x:-820,
    repeat:1,
    delay: 0.2,
    duration: 2,
    stagger: 0.1,
    opacity: 0,
    scrollTrigger: ".repeated-heading"
})
gsap.from(".repeated-para", {
    scale: 0,
    x:230,
    repeat:1,
    delay: 0.1,
    duration:3,
    stagger: 0.1,
    opacity: 0,
    scrollTrigger: ".repeated-para"
})

gsap.from(".nav-btn .btn", {
    scale: 0,
    x:200,
    repeat:1,
    delay: 0.2,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
    scrollTrigger: ".nav-btn .btn"
})

gsap.to(".Main-gallery-hover-effect .img-fluid", {
    x: 150,
    y: 20,
    rotate: 270,
    duration: 3,
    borderRadius: "50%",
    stagger: 0.2,
    scrollTrigger: ".Main-gallery-hover-effect .img-fluid",
    repeat: -1,
    yoyo: true
})

gsap.to(".text-moving-section h2", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".text-moving-section",
        scroller: "body",
        color: "white",
        scrub: 2,
        pin: true
    }
})



gsap.from(".magicright", {
    scale: 0,
    x:-820,
    repeat:1,
    backgroundColor:"black",
    delay: 2,
    duration: 0.2,
    stagger: 1,
    opacity: 0,
    scrollTrigger: ".magicright"
})


gsap.to(".img-marquee-section img", {
    transform: "translateX(-330%)",
    scrollTrigger: {
        trigger: ".img-marquee-section",
        scroller: "body",
        end: "top -30%",
        scrub: 2,
        stagger: 1
    }
})


// var path = "M 10 100 Q 500 100 990 100"
// var finalPath = "M 10 100 Q 500 100 990 100"


// var linemovings = document.querySelector(".linemoving")

// linemovings.addEventListener("mousemove", function (dets) {
//     path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

//     gsap.to("svg path", {
//         attr: { d: path },
//         duration: 0.2,
//         ease: "power3.out"
//     })
// })

// linemovings.addEventListener("mouseleave", function (dets) {
//     gsap.to("svg path", {
//         attr: { d: finalPath },
//         duration: 0.3,
//         ease: "bounce.out"
//     })
// })


gsap.registerPlugin(ScrollTrigger);

gsap.to(".why-choose-body span", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".why-choose-us-section",
    markers: false,
    scrub: 1,
    start: "top center",
    end: "bottom center"
  }
});




var split = new SplitText("#quotes", {type: "words"});
gsap.from(split.words, {
  duration: 0.1, 
  y: 30, 
  color:"#ff8709",
  repeat:-1, 
  stagger: 0.1
});






