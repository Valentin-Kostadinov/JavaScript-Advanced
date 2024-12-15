function subtract(firstNum, secondNum) {

        firstNum = document.getElementById('firstNumber');
        secondNum = document.getElementById('secondNumber');
    
        document.getElementById('result').textContent = Number(firstNum.value) - Number(secondNum.value);
}