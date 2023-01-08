document.addEventListener('DOMContentLoaded', function(){
   
    const btn = document.getElementById("init");
    const title = document.getElementById("title")

    btn.onclick = function () {
        title.style.opacity = "0%";
        btn.style.opacity = '0%';
    }

})
