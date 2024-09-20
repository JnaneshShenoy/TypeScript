function logAccess(
  target: any,
  propertyKey: string,
  descriptor?: PropertyDescriptor
): void {
  const originalGetter = descriptor && descriptor.get;
  const originalSetter = descriptor && descriptor.set;

  if (originalGetter) {
    descriptor!.get = function (...args: any[]) {
      console.log(`Getting value of property ${propertyKey}`);
      return originalGetter!.call(this, ...args);
    };
  }

  if (originalSetter) {
    descriptor!.set = function (value: any) {
      console.log(`Setting value of property ${propertyKey} to ${value}`);
      originalSetter!.call(this, value);
    };
  }
}

class MyClass {
  private _myProperty: string = "Initial Value";

  @logAccess
  get myProperty(): string {
    return this._myProperty;
  }

  set myProperty(value: string) {
    this._myProperty = value;
  }
}

const myInstance = new MyClass();
console.log(myInstance.myProperty);
myInstance.myProperty = "New Value";
console.log(myInstance.myProperty);

// class MyClass {
//   @logAccess
//   property: string;

//   constructor(property: string) {
//     this.property = property;
//   }
// }

// const instance = new MyClass("initial value");
// console.log(instance.property);
// instance.property = "new value";
// console.log(instance.property);

// function capitalize1(target: any, propertyKey: string) {
//   let originalValue = target[propertyKey];

//   // Define a new getter and setter for the property
//   const getter = function () {
//     return originalValue.charAt(0).toUpperCase() + originalValue.slice(1);
//   };

//   const setter = function (newValue: string) {
//     originalValue = newValue;
//   };

//   // Replace the original property with the new getter and setter
//   Object.defineProperty(target, propertyKey, {
//     get: getter,
//     set: setter,
//     enumerable: true,
//     configurable: true,
//   });
// }

// class Product1 {
//   @capitalize1
//   static pname: string = "john";
//   price: number;

//   constructor(namey: string, price: number) {
//     this.pname = namey;
//     this.price = price;
//   }
// }

// const product = new Product1("iphone", 999);
// console.log(product.pname); // Output: John

// import { PropertyDescriptor } from "reflect-metadata";

// function LoggerNew(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Logger decorator");
//   console.log("target:", target);
//   console.log("methodName:", methodName);
//   console.log("descriptor:", descriptor);
// }

// class Employer {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   @LoggerNew
//   static calAge(dob: string): number {
//     // Implement the logic to calculate age based on the dob string
//     // For example:
//     const birthDate = new Date(dob);
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     return age;
//   }
// }

// const EmpObj = new Employer("john");

// EmpObj.calAge("06-10-1998");

// function logParameter(
//    template?:
//      | string
//      | ((target: any, propertyKey: string, descriptor: PropertyDescriptor) => string)
//  ) {
//    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//      const message =
//        typeof template === "string"
//          ? template
//          : template(target, propertyKey, descriptor);
//      console.log(message);
//    };
//  }

//  class Example {
//    @logParameter(
//      (target: any, propertyKey: string, descriptor: PropertyDescriptor) =>
//        `PD applied to method ${propertyKey} of class ${target.constructor.name}`
//    )
//    greet(message: string) {
//      console.log("Message: " + message);
//    }
//  }

//  const instance = new Example();
//  instance.greet("Hello World");

// function loggerxyz(target: Function) {
//    console.log("logging ...");
//    console.log(target);
//  }

//  @loggerxyz
//  class xyz {
//    name: string;
//    age: number;

//    constructor(name: string, age: number) {
//     console.log("Class constructor is called !!")
//    }
//  }

//  const xyzObj = new xyz("Jnanesh", 21);
