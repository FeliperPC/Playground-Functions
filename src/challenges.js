// Desafio 1
function compareTrue(value1,value2) {
  if(value1&&value2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(array) {
  let higher = array[0];
  let count = 0;
  for(let i=0;i<array.length;i+=1){
    if(higher<array[i]){
      higher = array[i];
    }
  }
  for(i=0;i<array.length;i+=1){
    if(higher === array[i]){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1,mouse, cat2) {
  if(mouse - cat1 === mouse-cat2) return 'os gatos trombam e o rato foge'; 
  if((cat1-mouse)>(cat2-mouse)){
    return "cat2";
  } else {
    return "cat1";
  }
}
console.log(catAndMouse(10,15,15));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
