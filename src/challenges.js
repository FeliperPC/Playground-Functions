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
function catAndMouse(mouse,cat1, cat2) {
  if(cat1-mouse === cat2-mouse) return 'os gatos trombam e o rato foge'; 
  if(cat2>mouse && cat2<cat1){
    return "cat2";
  } else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newarray=[];
  for(let i=0;i<array.length;i+=1){
    if(array[i]%3 === 0 && array[i]%5==0){
      newarray.push('fizzBuzz');
    } else if (array[i]%3 === 0){
      newarray.push('fizz');
    } else if (array[i]%5 === 0){
      newarray.push('buzz');
    }
    else{
      newarray.push('bug!');
    }
  }
  return newarray;
}

// Desafio 9
function encode(phrase) {
  let array = phrase.split('')
  for(let i=0;i<array.length;i+=1){
    switch(array[i]){
      case 'a':
        array[i]= 1;
        break;
      case 'e':
        array[i]= 2;
        break;
      case 'i':
        array[i]= 3;
        break;
      case 'o':
        array[i]= 4;
        break;
      case 'u':
        array[i]= 5;
        break;
    }
  }
  let message = array.join('');
  return message;
}

function decode(phrase) {
  let array = phrase.split('')
  for(let i=0;i<array.length;i+=1){
    switch(array[i]){
      case '1':
        array[i]= 'a';
        break;
      case '2':
        array[i]= 'e';
        break;
      case '3':
        array[i]= 'i';
        break;
      case '4':
        array[i]= 'o';
        break;
      case '5':
        array[i]= 'u';
        break;
    }
  }
  let message = array.join('');
  return message;
}

// Desafio 10
function techList(arrayTech,name) {
  if(!arrayTech.length) return 'Vazio!';
  arrayTech.sort();
  const resultado = [];
  for(let i=0;i<arrayTech.length;i+=1){
    resultado.push({tech:arrayTech[i],name:name});
  }
  return resultado;
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
