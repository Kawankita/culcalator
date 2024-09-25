
function display(value) {
    document.getElementById('result').value += value;
}


function clearScreen() {
    document.getElementById('result').value = '';
}


function calculate() {
    var p = document.getElementById('result').value;
    var q = eval(p); // Using eval() to compute the expression
    document.getElementById('result').value = q;
}


function backspace() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}
