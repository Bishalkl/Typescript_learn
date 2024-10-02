
function identityThree<T>(val: T): T {
    return val
}

interface Bottle {
  brand: string
  type: number
}

identityThree<string>("Bishal");
identityThree<number>(12);
identityThree<boolean>(true);
identityThree<Bottle>({brand: "Bishal", type: 12});

