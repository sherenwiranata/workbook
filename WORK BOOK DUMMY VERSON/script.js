document.querySelector(".gameName").addEventListener("click", function() {
    this.classList.add("wobble");

    // Remove the class after animation ends so it can be triggered again
    setTimeout(() => {
        this.classList.remove("wobble");
    }, 300); // Match the animation duration
});