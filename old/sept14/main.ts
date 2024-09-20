class Animal {
  heightx(height: number = 0) {
    console.log(`Animal is of height ${height} meters.`);
  }
}

class Mammal extends Animal {
  feedMilk() {
    console.log("Feeding milk.");
  }
}

class Dog extends Mammal {
  bark() {
    console.log("Boww! Boww!");
  }
}

const dog = new Dog();

dog.bark();
dog.feedMilk();
dog.heightx(0.8);

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
