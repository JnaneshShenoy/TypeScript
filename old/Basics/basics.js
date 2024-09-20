form = document.getElementById('frm');
val1 = frm.a;
val2 = frm.b;
var a = document.getElementById('a');
var b = document.getElementById('b');
var button = document.getElementById('submit');
button.addEventListener('click', function (event) {
    event.preventDefault();
    var result = parseInt(a.value) + parseInt(b.value);
    alert(result);
    document.write("".concat(val1.var));
});
