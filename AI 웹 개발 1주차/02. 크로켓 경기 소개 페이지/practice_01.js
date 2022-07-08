function getCheck() {

    const foodList = document.getElementsByName("food");
    let str = "";

    for (let i = 0; i < foodList.length; i++) {

        const target = foodList[i];

        if (target.checked == true) {
            str += target.value + "<br/>"; 
        }
    }

    document.getElementById("result").innerHTML = "<h1>" + str + "</h1>";

}

const btn = document.getElementById("btn");

btn.addEventListener("click", getCheck);