class Shape {
   Area: number;
   
   constructor(area: number) {
      this.Area = area; // Fixed the initialization of `Area`
   }
}

class Circle extends Shape {
   display(): void {
      console.log("Area of Circle = " + this.Area);
   }
}

var obj = new Circle(23);
obj.display();
