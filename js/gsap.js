gsap.from(".banner-section a, .text-rejoice, .nav-btn .btn ", {
    y:120,
    delay:0.1,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
})

gsap.from(".repeated-heading,.repeated-para", {
    x:-820,
    delay: 0.1,
    duration: 2,
    stagger: 0.1,
    opacity: 0,
    scrollTrigger: ".repeated-heading"
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
        stagger:1,
        scrollTrigger: ".text-moving-section h2"

    }
})


gsap.from(".magicright", {
    scale: 0,
    x:-820,
    backgroundColor:"black",
    delay: 2,
    duration: 0.2,
    stagger: 0.3,
    opacity: 0,
    scrollTrigger: ".magicright"
})

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




// --- image increasing ---

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".orangeWrapper",
      scrub: true,
      pin: true,
      start: "50% 50%",
      end: "+=200%"
    }
  })
  
  .from(".orange", {
    scale: 0.5, 
    ease: "none"
  })
  


