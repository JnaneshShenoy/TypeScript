var sum = function (a, b) { return a + b; };
console.log(sum(20, 30));
var printx = function () { return console.log("Hello world"); };
printx();
var add = function (a, b) { return a + b; };
console.log("Result = ".concat(add(45, 78)));
var Student = /** @class */ (function () {
    function Student(usn, name) {
        var _this = this;
        this.showDetails = function () {
            console.log("Student USN: ".concat(_this.usn, ", Student Name: ").concat(_this.name));
        };
        this.usn = usn;
        this.name = name;
    }
    return Student;
}());
var student = new Student(101, "Ram");
student.showDetails();
