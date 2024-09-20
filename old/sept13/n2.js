//typescript accessor which provides a method to access and set the class members
//getter and setter
//getter-which is used for retrieving the value of a variable
//get
//get propertyname (0(
//getter, the code executed on getting obj.propertyname})
var MyDrawing = /** @class */ (function () {
    function MyDrawing() {
        this.length = 20;
        this.breadth = 50;
    }
    Object.defineProperty(MyDrawing.prototype, "rectangle", {
        get: function () {
            return this.length * this.breadth;
        },
        enumerable: false,
        configurable: true
    });
    return MyDrawing;
}());
console.log(new MyDrawing().rectangle);
