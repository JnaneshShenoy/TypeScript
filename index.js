"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // Ensure reflect-metadata is loaded
// Decorator to validate that product fields are non-empty
function ValidateNonEmpty(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var product = args[0];
        if (!product.name || product.name.trim() === "") {
            throw new Error("Product name cannot be empty.");
        }
        if (product.price == null || product.price <= 0) {
            throw new Error("Product price must be greater than 0.");
        }
        if ("warrantyPeriod" in product && product.warrantyPeriod <= 0) {
            throw new Error("Warranty period must be greater than 0.");
        }
        if ("expiryDate" in product && new Date(product.expiryDate) <= new Date()) {
            throw new Error("Expiry date must be in the future.");
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
var ProductService = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _update_decorators;
    return _a = /** @class */ (function () {
            function ProductService() {
                this.products = (__runInitializers(this, _instanceExtraInitializers), []);
            }
            ProductService.prototype.create = function (product) {
                this.products.push(product);
                return product;
            };
            ProductService.prototype.read = function (productId) {
                return this.products.find(function (product) { return product.id === productId; });
            };
            ProductService.prototype.update = function (productId, updatedProduct) {
                var productIndex = this.products.findIndex(function (product) { return product.id === productId; });
                if (productIndex === -1) {
                    throw new Error("Product not found.");
                }
                var currentProduct = this.products[productIndex];
                var newProduct = __assign(__assign({}, currentProduct), updatedProduct);
                this.products[productIndex] = newProduct;
                return this.products[productIndex];
            };
            ProductService.prototype.delete = function (productId) {
                var productIndex = this.products.findIndex(function (product) { return product.id === productId; });
                if (productIndex === -1) {
                    throw new Error("Product not found.");
                }
                this.products.splice(productIndex, 1);
            };
            ProductService.prototype.getAll = function () {
                return this.products;
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
// Example usage
var mobileService = new ProductService();
var samsung = {
    id: 1,
    name: "Samsung Galaxy S22",
    price: 799,
    warrantyPeriod: 12,
};
mobileService.create(samsung);
console.log("Mobile Products: ", mobileService.getAll());
mobileService.update(1, { price: 699 });
console.log("Updated Mobile Product: ", mobileService.read(1));
mobileService.delete(1);
console.log("Mobile Products after deletion: ", mobileService.getAll());
var foodService = new ProductService();
var apple = {
    id: 1,
    name: "Apple",
    price: 1.5,
    expiryDate: "2024-12-31",
};
foodService.create(apple);
console.log("Food Products: ", foodService.getAll());
