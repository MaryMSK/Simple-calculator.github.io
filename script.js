function add() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = Number(n1) + Number(n2);
}

function subtract() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = n1 - n2;
}

function multiply() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = n1 * n2;
}

function divide() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = n1 / n2;
}