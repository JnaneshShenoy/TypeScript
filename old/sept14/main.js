var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (height) {
        if (height === void 0) { height = 0; }
        console.log("Animal is of height ".concat(height, " meters."));
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.feedMilk = function () {
        console.log("Feeding milk.");
    };
    return Mammal;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Boww! Boww!");
    };
    return Dog;
}(Mammal));
var dog = new Dog();
dog.bark();
dog.feedMilk();
dog.move(0.8);
// // Inheritance
// class Animal {
//   move(height = 0) {
//     console.log(`Animal moved ${height}m.`);
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
// class Animal2 {
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   private name: string;
//   public getName(): string {
//     return this.name;
//   }
// }
