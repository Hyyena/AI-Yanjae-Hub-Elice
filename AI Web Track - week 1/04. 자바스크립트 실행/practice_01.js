let numArr = [1, 2, 3, 4, 5];

let result = numArr.reduce((num1, num2) => {
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    
    return num1 + num2;
})  

console.log(result);