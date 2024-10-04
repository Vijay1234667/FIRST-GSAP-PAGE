
document.addEventListener("DOMContentLoaded", function () {

    'use strict';

    gsap.registerPlugin(ScrollTrigger);
    const lennis = new Lenis({
        duration: 1.2,
        smooth: true
    });
    function raf(time) {
        lennis.raf(time)
        requestAnimationFrame(raf)
    };
    lennis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lennis.raf(time * 1000)
    });
    let workInfoItems = document.querySelectorAll('.expertise-right-img');
    workInfoItems.forEach(function (item, index) {
        item.style.zIndex = workInfoItems.length - index;
    });
    gsap.set(".expertise-right-img", {
        clipPath: function () {
            return "inset(0px 0px 0px 0px)"
        }
    });
    const animation = gsap.to('.expertise-right-img:not(:last-child)', {
        clipPath: function () {
            return "inset(0px 100% 0px 0px)"
        },
        stagger: .4,
        ease: "none"
    });
    ScrollTrigger.create({
        trigger: '.expertise-left',
        start: 'top top',
        end: 'bottom bottom',
        animation: animation,
        scrub: 1,
        markers:false
    });

});

