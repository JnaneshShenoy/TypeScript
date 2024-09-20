import "reflect-metadata"; // Ensure reflect-metadata is loaded

interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface Mobile extends IProduct {
  warrantyPeriod: number;
}

interface Food extends IProduct {
  expiryDate: string;
}

// Decorator to validate that product fields are non-empty
function ValidateNonEmpty(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const product = args[0];

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

class ProductService<T extends IProduct> {
  private products: T[] = [];

  @ValidateNonEmpty
  create(product: T): T {
    this.products.push(product);
    return product;
  }

  read(productId: number): T | undefined {
    return this.products.find((product) => product.id === productId);
  }

  @ValidateNonEmpty
  update(productId: number, updatedProduct: Partial<T>): T | undefined {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    if (productIndex === -1) {
      throw new Error("Product not found.");
    }

    const currentProduct = this.products[productIndex];
    const newProduct = { ...currentProduct, ...updatedProduct };

    this.products[productIndex] = newProduct as T;
    return this.products[productIndex];
  }

  delete(productId: number): void {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );
    if (productIndex === -1) {
      throw new Error("Product not found.");
    }
    this.products.splice(productIndex, 1);
  }

  getAll(): T[] {
    return this.products;
  }
}

// Example usage
const mobileService = new ProductService<Mobile>();

const samsung: Mobile = {
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

const foodService = new ProductService<Food>();

const apple: Food = {
  id: 1,
  name: "Apple",
  price: 1.5,
  expiryDate: "2024-12-31",
};
foodService.create(apple);

console.log("Food Products: ", foodService.getAll());
