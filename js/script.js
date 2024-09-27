var allBox = document.querySelector(".mainbox")
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
































// window.addEventListener("load", function(){
//     setTimeout(
//         function open(event){
//             document.querySelector(".modal").style.
//             display = "block";
//         },
//         2000
//     )
// });
// document.querySelector(".close").addEventListener
// ("click", function(){
//     document.querySelector(".modal").style.display = "none";

// });



// $(function () {
 
//     $('#timePicker').datetimepicker({
//         timeFormat: "hh:mm tt", //timezone format
//         timezoneList: [
//             { value: -300, label: 'Eastern' },
//             { value: -360, label: 'Central' },
//             { value: -420, label: 'Mountain' },
//             { value: -480, label: 'Pacific' }
//         ]
//     });
//     $('#timePicker').timepicker(
//         //$.timepicker.regional["localization code"]
//         $.timepicker.regional['en']//English
//     );
 
// });


    // export default [
    //     "https://ik.imagekit.io/gku4adhog/wondrow.png?updatedAt=1703574584683",
    //     "https://ik.imagekit.io/gku4adhog/wondrow.png?updatedAt=1703574584683",
    //     "https://ik.imagekit.io/gku4adhog/wondrow.png?updatedAt=1703574584683",
    //     "geeksimage1.png",
    //     "geeksimage2.png",
    //     "geeksimage3.png",
    //     "gfg1.png"
    // ];



    // function displayImage(){
    //     const input = document.getElementById("upload-input");
    //     const file = input.file[0];
    //     if(file){
    //         const reader = new FileReader();
    //         reader.onload = function (event){
    //             const imageDataUrl = event.target.result;
    //             updateImageSrc(imageDataUrl);

    //         };
    //         reader.onerror = function (error) {
    //             console.error("error the file :",error);

    //         };
    //         reader.readAsDataURL(file);
    //     }
    // }


