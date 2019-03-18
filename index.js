var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  kittens.slice(name);
  return 
}

function prependKitten(name) {
  name.concat(kittens);
}

function removeLastKitten(name) {
  kittens.slice(2, 1, name);
  return kittens;
}

function 