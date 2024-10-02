type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

function getFood(pet: Fish | Bird) {
  return isBird(pet) ? "Bird Food" : "Fish Food";
}
