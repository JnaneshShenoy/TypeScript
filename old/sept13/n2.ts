//typescript accessor which provides a method to access and set the class members
//getter and setter
//getter-which is used for retrieving the value of a variable
//get
//get propertyname (0(
//getter, the code executed on getting obj.propertyname})
class MyDrawing {
   length: number = 20;
   breadth: number = 50;
   get rectangle() {
   return this.length * this.breadth;
   }
   }
   console.log(new MyDrawing().rectangle);