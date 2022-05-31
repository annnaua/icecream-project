var square=document.querySelector(".animates");square.classList.remove("animates-transition");var observer=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?square.classList.add("animates-transition"):square.classList.remove("animates-transition")}))}));observer.observe(document.querySelector(".animates"));
//# sourceMappingURL=index.181d2d7f.js.map
