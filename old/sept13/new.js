var Studentx = /** @class */ (function () {
    function Studentx(id, name) {
        this.id = id;
        this.name = name;
    }
    Studentx.prototype.display = function () {
        console.log("Student ID: ".concat(this.id, ", Student Name: ").concat(this.name));
    };
    return Studentx;
}());
var std = new Studentx(101, "Jnanesh");
std.display();
