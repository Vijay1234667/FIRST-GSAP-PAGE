var allBox = document.querySelector(".banner-section")
var cursor = document.querySelector(".cursormover")

allBox.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
}) 

allBox.addEventListener("mouseenter", function(){       
    gsap.to(cursor,{
        scale:1
    })
})
allBox.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0
    })
})

var allBoxa = document.querySelector(".bg-rainbow-section")
var cursora = document.querySelector(".cursormover-rainbow")

allBoxa.addEventListener("mousemove", function(dets){
    gsap.to(cursora,{
        x:dets.x,
        y:dets.y
    })
}) 

allBoxa.addEventListener("mouseenter", function(){       
    gsap.to(cursora,{
        scale:1
    })
})
allBoxa.addEventListener("mouseleave", function(){
    gsap.to(cursora,{
        scale:0
    })
})


var cursormovecard = document.querySelector(".discover-body-content")
var cursorcard = document.querySelector(".cursormover-card")

cursormovecard.addEventListener("mousemove", function(dets){
    gsap.to(cursorcard,{
        x:dets.x,
        y:dets.y,
    })
}) 

cursormovecard.addEventListener("mouseenter", function(){       
    gsap.to(cursorcard,{
        scale:1
        
    })
})
cursormovecard.addEventListener("mouseleave", function(){
    gsap.to(cursorcard,{
        scale:0
    })
})



