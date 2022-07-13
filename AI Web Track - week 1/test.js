var divTag1 = document.getElementById("one");
var divTag2 = document.getElementById("two");
var divTag3 = document.getElementById("three");

function handleOnclick() {
    this.classList.toggle("on"); // 클래스 하나
}

divTag1.addEventListener("click", handleOnclick);
divTag2.addEventListener("click", handleOnclick);
divTag3.addEventListener("click", handleOnclick);