 const Button = document.getElementById("grey");
    Button.addEventListener('click', function(){
    const body = document.querySelector("body");
    body.style.backgroundColor = "grey";
 });
const allButton = document.querySelectorAll(".button");
    const body = document.querySelector("body");   

allButton.forEach((button) => {
    button.addEventListener("mouseenter", function () {
        body.style.backgroundColor = button.id;
    });
});

