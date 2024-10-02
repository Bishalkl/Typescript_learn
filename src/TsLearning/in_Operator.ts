interface Chicken {
  name: string;
  type: string;
  isFly: boolean;
}

interface Falcon {
  name: string;
  type: string;
  isFly: boolean;
}

function findFlyBird(bird: Chicken | Falcon) {
  if (bird.isFly) {
    return `${bird.name} can fly!`;
  }
  return `${bird.name} cannot fly.`;
}

// Correct usage: pass an object matching the structure of Chicken or Falcon
console.log(findFlyBird({ name: "Falcon", type: "Bird of Prey", isFly: true }));
console.log(findFlyBird({ name: "Chicken", type: "Domestic", isFly: false }));
