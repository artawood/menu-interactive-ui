function reset() {
    location.reload();
}

function test() {
    var element = document.getElementById("top-bar");
    element.classList.add("test"); // add class for animation
    element.classList.remove("bar-1"); // remove class to clear static state
    element.classList.add("new-bar"); // add class for the final state

}

function rotateMenuRight() {
    var topBar = document.getElementById("top-bar");
    topBar.classList.add("transform-top-bar");
    topBar.classList.add("transformed-top-bar");
    topBar.classList.remove("return-top-bar");
    var bottomBar = document.getElementById("bottom-bar");
    bottomBar.classList.add("transform-bottom-bar");
    bottomBar.classList.add("transformed-bottom-bar");
    bottomBar.classList.remove("return-bottom-bar");
    var delayInMilliseconds = 500; //1 second = 1000
    setTimeout(function () {
        //next line of code will execute after set time
    }, delayInMilliseconds);
    var element = document.getElementById("menu-button");
    element.classList.add("rotate-90-right");
    element.classList.add("menu-90-right");
    element.classList.remove("rotate-90-left");
    element.classList.remove("menu-90-left");
    element.removeEventListener("click", rotateMenuRight);
    element.addEventListener("click", rotateMenuLeft);
    
}

function rotateMenuLeft () {
    var element = document.getElementById("menu-button");
    element.classList.add("rotate-90-left");
    element.classList.add("menu-90-left");
    element.classList.remove("rotate-90-right");
    element.classList.remove("menu-90-right");
    element.removeEventListener("click", rotateMenuLeft);
    element.addEventListener("click", rotateMenuRight);
    var delayInMilliseconds = 500; //1 second = 1000
    setTimeout(function () {
        //next line of code will execute after set time
    }, delayInMilliseconds);
    var topBar = document.getElementById("top-bar");
    topBar.classList.remove("transform-top-bar");
    topBar.classList.remove("transformed-top-bar");
    topBar.classList.add("return-top-bar");
    var bottomBar = document.getElementById("bottom-bar");
    bottomBar.classList.remove("transform-bottom-bar");
    bottomBar.classList.remove("transformed-bottom-bar");
    bottomBar.classList.add("return-bottom-bar");
    
}