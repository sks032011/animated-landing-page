const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firspageanim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

        .to(".boundingelem", {
            y: 0,
            duration: 2,
            opacity: 1,
            delay: -1,
            stagger: .2,
            ease: 'bounce',
        })
        .from("#herofooter", {
            y: -10,
            duration: 1.5,
            delay: -1,
            opacity: 0,
            ease: Expo.easeInOut
        })


}


function circlemousefollow() {
    window.addEventListener("mousemove", function (dets) {
        console.log(dets)
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })

}

//run fn
firspageanim();
circlemousefollow();

// teeno element ko slect kro uske baad teeno par ek mousemove lga do ,jab mouse move ho to ye pata kro ki mouse kahan par hai jiska matlab mouse ki x and y pos pata kro ab mouse ki x y pos ke badle us image ko show kro and us img ko move move krte smay rotate karo,and jaise jaise mouse tez chake waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem")
    .forEach(function (elem) {
        elem.addEventListener("mousemove", function (details) {
            // console.log(details.clientX,details.clientY)
            
            var diff = (details.clientY - elem.getBoundingClientRect().top)
            var diffrot = 0;
            var rotate = 0;
            // rotation ke liye method ye h ki agr scrn ke pas hai tu zyada rotate warna km
            diffrot = details.clientX - rotate;
            rotate = details.clientX
            elem.addEventListener("mouseleave", function (details) {
                // console.log(details.clientX,details.clientY)
        
             
        
                gsap.to(elem.querySelector("img"), {
                    opacity: 0,
                    ease: Power3,
                    duration:0.5,
                })
            })

        
            // suppose diff 200-0 hua diffroyt is 200 now bad me rot ki vlaue 200 ho gyi and suppose clnx 205 ///diff is 5 now us hisab se rotate kro 
            
            // max rot on diff is -20 to 20
            // clamp ko min max value bgate h


            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                duration:0.5,
                left: details.clientX,
                rotate: gsap.utils.clamp(-10, 10, diffrot*.5)
            })

        })

    })


    