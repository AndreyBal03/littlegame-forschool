const obsr = new IntersectionObserver((en) => {
    en.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("sw"); else{
            en.target.classList.remove("sw");
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){   
    const btn = document.getElementById("start");
    btn.onclick = function () {
	location.href="./main.html"
    }

})

const HddnElements = document.querySelectorAll(".hd");

HddnElements.forEach((element) => obsr.observe(element));
