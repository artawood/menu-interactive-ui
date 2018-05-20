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
    element.getElementById("menu-button").addEventListener("click", rotateMenuRight);
}