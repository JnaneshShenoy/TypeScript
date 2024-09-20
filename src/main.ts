// Intrrfaces
interface IProduct {
  id: string;
  name: string;
  price: number;
}

interface ClothingProduct extends IProduct {
  fit: "regular" | "plus";
  size: string;
}

interface FoodProduct extends IProduct {
  expiry: Date;
}

// Decorators
function ValidateNonEmpty(target: any, propertyKey: string | symbol) {
  const originalMethod = target[propertyKey as string];

  target[propertyKey as string] = function (...args: any[]) {
    const [product] = args;

    if (!product.name || product.price === undefined) {
      throw new Error(
        `Validation failed: ${String(
          propertyKey
        )} - Name and Price are required.`
      );
    }

    return originalMethod.apply(this, args);
  };
}

class ProductService<T extends IProduct> {
  private products: Map<string, T> = new Map();

  // CRUD operations
  // create
  @ValidateNonEmpty
  create(product: T): void {
    if (this.products.has(product.id)) {
      throw new Error("Product already exists.");
    }
    this.products.set(product.id, product);
  }

  // read
  read(id: string): T | undefined {
    return this.products.get(id);
  }

  // update
  @ValidateNonEmpty
  update(id: string, updatedProduct: Partial<T>): void {
    const product = this.products.get(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    this.products.set(id, { ...product, ...updatedProduct } as T);
  }

  // delete
  delete(id: string): void {
    if (!this.products.has(id)) {
      throw new Error("Product not found.");
    }
    this.products.delete(id);
  }

  // get all
  getAll(): T[] {
    return Array.from(this.products.values());
  }
}

const clothingProductService = new ProductService<ClothingProduct>();
const foodProductService = new ProductService<FoodProduct>();

// Create new products
const shirt: ClothingProduct = {
  id: "1",
  name: "Shirt",
  price: 1500,
  fit: "regular",
  size: "L",
};

const chips: FoodProduct = {
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
} catch (error) {
  console.error("Error updating product:", error);
}

// console.log("Updated clothing product:", clothingProductService.read("1"));

console.log("\n\n");

try {
  foodProductService.delete("2");
  console.log("Food products after deletion:", foodProductService.getAll());
} catch (error) {
  console.error("Error deleting product:", error);
}

// ===========testing====================

console.log("\n\n");

const jacket: ClothingProduct = {
  id: "3",
  name: "Jacket",
  price: 3500,
  fit: "plus",
  size: "XL",
};
clothingProductService.create(jacket);
console.log("All clothing products:", clothingProductService.getAll());

console.log("\n\n");

const milk: FoodProduct = {
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
} catch (error) {
  console.error("Error updating clothing product:", error);
}

console.log("\n\n");
try {
  foodProductService.update("4", { price: 55 });
  console.log("Updated food product:", foodProductService.read("4"));
} catch (error) {
  console.error("Error updating food product:", error);
}

console.log("\n\n");

try {
  const duplicate: FoodProduct = {
    id: "4",
    name: "Nandini",
    price: 55,
    expiry: new Date("2024-11-01"),
  };
  foodProductService.create(duplicate);
} catch (error) {
  console.error("Error creating duplicate food product:", error);
}

console.log("\n\n");
try {
  clothingProductService.update("71", { price: 2000 });
} catch (error) {
  console.error("Error updating non-existing product:", error);
}

console.log("\n\n");

try {
  foodProductService.delete("45");
} catch (error) {
  console.error("Error deleting non-existing product:", error);
}

console.log("\n\n");