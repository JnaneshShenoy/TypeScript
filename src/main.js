var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// Decorators
function ValidateNonEmpty(target, propertyKey) {
    var originalMethod = target[propertyKey];
    target[propertyKey] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var product = args[0];
        if (!product.name || product.price === undefined) {
            throw new Error("Validation failed: ".concat(String(propertyKey), " - Name and Price are required."));
        }
        return originalMethod.apply(this, args);
    };
}
var ProductService = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _update_decorators;
    return _a = /** @class */ (function () {
            function ProductService() {
                this.products = (__runInitializers(this, _instanceExtraInitializers), new Map());
            }
            // CRUD operations
            // create
            ProductService.prototype.create = function (product) {
                if (this.products.has(product.id)) {
                    throw new Error("Product already exists.");
                }
                this.products.set(product.id, product);
            };
            // read
            ProductService.prototype.read = function (id) {
                return this.products.get(id);
            };
            // update
            ProductService.prototype.update = function (id, updatedProduct) {
                var product = this.products.get(id);
                if (!product) {
                    throw new Error("Product not found.");
                }
                this.products.set(id, __assign(__assign({}, product), updatedProduct));
            };
            // delete
            ProductService.prototype.delete = function (id) {
                if (!this.products.has(id)) {
                    throw new Error("Product not found.");
                }
                this.products.delete(id);
            };
            // get all
            ProductService.prototype.getAll = function () {
                return Array.from(this.products.values());
            };
            return ProductService;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _create_decorators = [ValidateNonEmpty];
            _update_decorators = [ValidateNonEmpty];
            __esDecorate(_a, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var clothingProductService = new ProductService();
var foodProductService = new ProductService();
// Create new products
var shirt = {
    id: "1",
    name: "Shirt",
    price: 1500,
    fit: "regular",
    size: "L",
};
var chips = {
    id: "2",
    name: "Chips",
    price: 50,
    expiry: new Date("2024-11-15"),
};
clothingProductService.create(shirt);
foodProductService.create(chips);
console.log("All clothing products:", clothingProductService.getAll());
console.log("All food products:", foodProductService.getAll());
console.log("\n\n");
try {
    clothingProductService.update("1", { price: 1200 });
    console.log("Updated clothing product:", clothingProductService.read("1"));
}
catch (error) {
    console.error("Error updating product:", error);
}
// console.log("Updated clothing product:", clothingProductService.read("1"));
console.log("\n\n");
try {
    foodProductService.delete("2");
    console.log("Food products after deletion:", foodProductService.getAll());
}
catch (error) {
    console.error("Error deleting product:", error);
}
// ===========testing====================
console.log("\n\n");
var jacket = {
    id: "3",
    name: "Jacket",
    price: 3500,
    fit: "plus",
    size: "XL",
};
clothingProductService.create(jacket);
console.log("All clothing products:", clothingProductService.getAll());
console.log("\n\n");
var milk = {
    id: "4",
    name: "Milk",
    price: 50,
    expiry: new Date("2024-10-10"),
};
foodProductService.create(milk);
console.log("All food products:", foodProductService.getAll());
console.log("\n\n");
try {
    clothingProductService.update("1", { size: "XL" });
    console.log("Updated clothing product:", clothingProductService.read("1"));
}
catch (error) {
    console.error("Error updating clothing product:", error);
}
console.log("\n\n");
try {
    foodProductService.update("4", { price: 55 });
    console.log("Updated food product:", foodProductService.read("4"));
}
catch (error) {
    console.error("Error updating food product:", error);
}
console.log("\n\n");
try {
    var duplicate = {
        id: "4",
        name: "Nandini",
        price: 55,
        expiry: new Date("2024-11-01"),
    };
    foodProductService.create(duplicate);
}
catch (error) {
    console.error("Error creating duplicate food product:", error);
}
console.log("\n\n");
try {
    clothingProductService.update("71", { price: 2000 });
}
catch (error) {
    console.error("Error updating non-existing product:", error);
}
console.log("\n\n");
try {
    foodProductService.delete("45");
}
catch (error) {
    console.error("Error deleting non-existing product:", error);
}
console.log("\n\n");
