// generics array
const getMoreSearchProducts = <T>(products: T[]): T | undefined => {
  const myIndex = 4;
  return products.length > myIndex ? products[myIndex] : undefined;
};

console.log(getMoreSearchProducts<number>([1, 2, 3, 4, 5, 6]));

interface Database {
  connection: string;
  username: string;
  password: string;
}

const getMoreSearchObject = <T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object => {
  return {
    valueOne,
    valueTwo,
  };
};

// Example usage:
const databaseObject: Database = {
  connection: "localhost:5432",
  username: "admin",
  password: "admin123",
};

// Now pass valueOne and valueTwo (which conforms to the Database interface)
console.log(getMoreSearchObject(3, databaseObject));
