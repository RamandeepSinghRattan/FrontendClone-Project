// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotiveAnimation();

function navbarAnimation(){

gsap.to("#nav-icon-box svg", {
    transform: "translatey(-100%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})

gsap.to(".list-item a", {
    transform: "translatey(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})
}

navbarAnimation();


function videoConAnimation() {

    let videoCon = document.getElementById("video-container");
    let playBtn = document.getElementById("play");


    videoCon.addEventListener("mousemove", function () {
        gsap.to(playBtn, {
            opacity: 1,
            scale: 1
        })
    })

    videoCon.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            opacity: 0,
            scale: 0
        })
    })

    videoCon.addEventListener("mousemove", function (dets) {
        gsap.to(playBtn, {
            left: dets.clientX,
            top: dets.clientY
        })
    })

}

videoConAnimation();

function h1AndVideoConAnimation() {
    gsap.from("#page1 h1", {
        y: 200,
        stagger: 0.5,
        delay: 0.5,
        opacity: 0
    })

    gsap.from("#video-container", {
        stagger: 0.5,
        scale: 0.9,
        delay: 0.5,
        opacity: 0
    })
}

h1AndVideoConAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.clientX,
            top: dets.clientY
        })
    })


    var a = document.querySelectorAll(".child");

    a.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%,-50%) scale(1)'
            })
        })

    })

    a.forEach(function (element) {
        element.addEventListener("mouseleave", function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%,-50%) scale(0)'
            })
        })

    })
}

cursorAnimation();


let btn = document.getElementById('button');
let nav = document.getElementById("nav");
let listItem = document.getElementById("unordered-list");

btn.addEventListener("click",function(){
    nav.classList.toggle('h-resp');
    listItem.classList.toggle('opacity-resp');

})

