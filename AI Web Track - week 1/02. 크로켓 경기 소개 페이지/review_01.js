var btnPlus = document.getElementById("plus");
var btnMinus = document.getElementById("minus");

function plus() {
    var input = document.getElementById("input").value;
    var output = Number(input) + 1;

    console.log(output);

    document.getElementById("input").value = output;
}

function minus() {
    var input = document.getElementById("input").value;
    var output = Number(input) - 1;
    if (output < 1) {
        output = 1;
    }

    console.log(output);

    document.getElementById("input").value = output;
}

btnPlus.addEventListener("click", plus);
btnMinus.addEventListener("click", minus);
