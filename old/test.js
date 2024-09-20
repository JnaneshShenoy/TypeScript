var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function logAccess(target, propertyKey, descriptor) {
    var originalGetter = descriptor && descriptor.get;
    var originalSetter = descriptor && descriptor.set;
    if (originalGetter) {
        descriptor.get = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Getting value of property ".concat(propertyKey));
            return (_a = originalGetter).call.apply(_a, __spreadArray([this], args, false));
        };
    }
    if (originalSetter) {
        descriptor.set = function (value) {
            console.log("Setting value of property ".concat(propertyKey, " to ").concat(value));
            originalSetter.call(this, value);
        };
    }
}
var MyClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_myProperty_decorators;
    return _a = /** @class */ (function () {
            function MyClass() {
                this._myProperty = (__runInitializers(this, _instanceExtraInitializers), "Initial Value");
            }
            Object.defineProperty(MyClass.prototype, "myProperty", {
                get: function () {
                    return this._myProperty;
                },
                set: function (value) {
                    this._myProperty = value;
                },
                enumerable: false,
                configurable: true
            });
            return MyClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_myProperty_decorators = [logAccess];
            __esDecorate(_a, null, _get_myProperty_decorators, { kind: "getter", name: "myProperty", static: false, private: false, access: { has: function (obj) { return "myProperty" in obj; }, get: function (obj) { return obj.myProperty; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var myInstance = new MyClass();
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
