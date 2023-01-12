const obsr = new IntersectionObserver((en) => {
    en.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("sw"); else{
            en.target.classList.remove("sw");
        }
    });
});


const HddnElements = document.querySelectorAll(".hd");
HddnElements.forEach((element) => obsr.observe(element));
