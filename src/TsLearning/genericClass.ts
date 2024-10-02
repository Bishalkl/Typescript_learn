// class in generics
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const MyFirstCart = new sellable<Quiz>();

MyFirstCart.addToCart({ name: "Type code", type: "Multiple choice" });
console.log(MyFirstCart.cart);

const mySecondCart = new sellable<Course>();

mySecondCart.addToCart({ name: "bishal", author: "bishal", subject: "bishal" });

console.log(mySecondCart.cart);
