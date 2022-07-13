// 함수형
function getText() {
    
    var input1 = document.getElementById("input1").value;
    document.getElementById("output1").innerHTML = input1;

}

// 이벤트 리스너
document.getElementById("input2").addEventListener("change", function () {
    document.getElementById("output2").innerHTML = this.value;
    });