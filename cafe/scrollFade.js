window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fading").style.visibility = "visible";
    } else {
        document.getElementById("fading").style.visibility = "hidden";
    }
}
