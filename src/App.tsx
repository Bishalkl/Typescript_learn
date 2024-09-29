import "./App.css";

function App() {
  function addTwo(num: number) {
    return num + 5;
  }

  const getHello = (s: string): string => {
    return s + "Hi";
  };

  const heros = ["thor", "spiderman", "ironman"];

  function consoleError(errmsg: string): never {
    throw new Error(errmsg);
  }

  const User = {
    name: "Bishal",
    email: "bishal@lco.dev",
    isActive: true,
  };

  function createUser({
    name,
    email,
    isActive,
  }: {
    name: string;
    email: string;
    isActive: boolean;
  }) {
    return `name: ${name} email${email} isActive: ${isActive}`;
  }

  type Users = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
  };

  const myUser: Users = {
    name: "h",
    email: "h@h.com",
    isActive: false,
  };

  console.log(myUser);

  return (
    <>
      <h1>{`${(myUser.name, myUser.email, myUser.isActive)}`}</h1>
      {heros.map((hero) => {
        <h1>{`hero is ${hero}`}</h1>;
      })}
      <h1>{addTwo(12)}</h1>
      <h2>{getHello("Bishal")}</h2>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
