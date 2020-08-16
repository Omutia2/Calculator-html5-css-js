/* JS for Calculator */
function calc() {
    let x = parseInt(document.querySelector("#value1").value);
    let y = parseInt(document.querySelector("#value2").value);
    let z = document.querySelector('#operator').value;
    let calculator;

    if (z == 'add') {
        calculate = x + y;
    }
    else if (z == 'min') {
        calculate = x - y;
    }
    else if (z == 'div') {
        calculate = x / y;
    }
    else if (z == 'mul') {
        calculate = x * y;
    }
    document.querySelector('#result').innerHTML=calculate;
}
/* JS for accordian: */
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the active class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
        /* For animation add max-height */
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}