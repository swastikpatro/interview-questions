// 5. Call printAnimals such that it prints all animals in object

const animals = [
  { species: 'Lion', name: 'king' },
  { species: 'Whale', name: 'Queen' },
];

// This is a constructor
function printAnimals(i) {
  this.print = function () {
    console.log(`#${i} ${this.species}: ${this.name}`);
  };

  this.print();
}

function printing() {
  for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i + 1);
  }
}

printing();

/**
#1 Lion: king
#2 Whale: Queen
*/
