// Interfaz para crear productos
class Product {
    use() {
      throw new Error("This method should be overridden!");
    }
  }
  
  // Clase concreta de un producto
  class ConcreteProductA extends Product {
    use() {
      return "Using Concrete Product A";
    }
  }
  
  // Clase concreta de otro producto
  class ConcreteProductB extends Product {
    use() {
      return "Using Concrete Product B";
    }
  }
  
  // Clase Factory
  class ProductFactory {
    createProduct(type) {
      if (type === 'A') {
        return new ConcreteProductA();
      } else if (type === 'B') {
        return new ConcreteProductB();
      }
      throw new Error("Unknown product type");
    }
  }
  
  // Uso de la Factory
  const factory = new ProductFactory();
  const productA = factory.createProduct('A');
  console.log(productA.use()); // Muestra: Using Concrete Product A
  
  