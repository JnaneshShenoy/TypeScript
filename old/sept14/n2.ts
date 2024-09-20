class car {
  color: string;
  constructor(color1:string){
   this.color=color1;
  }
}

class Audi extends car{
   price:number;
   constructor(color1:string,price:number){
   super(color1)
   this.price=price
   }
   display():void{
      console.log("Color of audi: "+this.color)
      console.log("price of audi: "+this.price)
   }
}

let obj1 = new Audi("black",2000000)
obj1.display()