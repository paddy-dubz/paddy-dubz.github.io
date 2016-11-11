var leftInput = "";
var rightInput = "";
var operation = "";
var answer = "";
var bNumbers = document.getElementById("calculator");
var bPlus = document.getElementById("bPlus");
var bMinus = document.getElementById("bMinus");
var bMultiply = document.getElementById("bMultiply");
var bDivide = document.getElementById("bDivide");
var bEquals = document.getElementById("bEquals");
var bClear = document.getElementById("bClear");
var mathMagic = {
    "+": function(a, b) { return a + b; },
    "-": function(a, b) { return a - b; },
    "x": function(a, b) { return a * b; },
    "÷": function(a, b) { return a / b; }
};

var buttonClick = function() {
    if (event.target.id.length === 2) {
        if (document.getElementById('middle').value == "") {
            leftInput += event.target.value;
            document.getElementById('left').value = leftInput;
        } else {
            rightInput += event.target.value;
            document.getElementById('right').value = rightInput;
        }
    }
};

var operators = function() {
    operation = mathMagic[document.getElementById('middle').value = this.value];
};

    // Look ma, no eval!
var result = function() {
    var x = parseFloat(leftInput);
    var y = parseFloat(rightInput);
    answer = operation(x, y);
    document.getElementById('left').value = answer;
    document.getElementById('middle').value = "";
    document.getElementById('right').value = "";
    rightInput = "";
    leftInput = answer;
};

var clearResult = function() {
    document.getElementById('left').value = "";
    document.getElementById('middle').value = "";
    document.getElementById('right').value = "";
    rightInput = "";
    leftInput = "";
    operation = "";
};

bNumbers.addEventListener('click', buttonClick);
bPlus.addEventListener('click', operators);
bMinus.addEventListener('click', operators);
bMultiply.addEventListener('click', operators);
bDivide.addEventListener('click', operators);
bEquals.addEventListener('click', result);
bClear.addEventListener('click', clearResult);