var btn = document.getElementById("btn");

function plus() {

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    var result = Number(input1) + Number(input2);

    console.log(result);

    document.getElementById("result").value = result;
    
}

btn.addEventListener("click", plus);