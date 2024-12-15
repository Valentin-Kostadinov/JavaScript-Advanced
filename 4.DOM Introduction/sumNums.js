function calc(firstNum, secondNum) {
    firstNum = document.getElementById('num1');
    secondNum = document.getElementById('num2');

    document.getElementById('sum').value = Number(firstNum.value) + Number(secondNum.value);
}