class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct(productData) {
    // Validacion de campos obligatorios
    if (
      !productData.title ||
      !productData.description ||
      !productData.price ||
      !productData.thumbnail ||
      !productData.code ||
      !productData.stock
    ) {
      console.log("Faltan campos obligatorios");
      return;
    }

    // Campo code no se repite
    const codigo = productData.code;
    const productoExistente = this.products.find(
      (producto) => producto.code === codigo
    );
    if (productoExistente) {
      console.log("El código del producto ya existe");
      return;
    }

    // contador para id incremental
    const productoConId = {
      ...productData,
      id: this.productIdCounter,
    };
    this.productIdCounter++;

    this.products.push(productoConId);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const producto = this.products.find((producto) => producto.id === id);
    if (!producto) {
      console.error("No encontrado");
      return null;
    }
    return producto;
  }
}

// Ejemplo de uso:

const productManager = new ProductManager();

productManager.addProduct({
  title: "jabon",
  description: "Jabon Liquido",
  price: 500,
  thumbnail: "imagen no disponible",
  code: "j1",
  stock: 100,
});

productManager.addProduct({
  title: "Jabon",
  description: "Jabon en polvo",
  price: 19.99,
  thumbnail: "imagen no disponible",
  code: "j2",
  stock: 550,
});

productManager.addProduct({
  title: "Jabon",
  description: "Jabon de tocador",
  price: 200,
  thumbnail: "imagen no disponible",
  code: "j3",
  stock: 250,
});

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(3));
console.log(productManager.getProductById(4));
