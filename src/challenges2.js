// Desafio 11
function generatePhoneNumber(array) {
  const count = {};
  if(array.length != 11) return "Array com tamanho incorreto.";
  for(let i=0;i<array.length;i+=1){
    const number = array[i];
    if(array[i]<0||array[i]>9) return "não é possível gerar um número de telefone com esses valores";
    if(count[number]>=2) return "não é possível gerar um número de telefone com esses valores"; // Não entendi
    count[number] = (count[number]||0)+1; // Cria a chave e atribui valor a ela ao mesmo tempo
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if((lineA>lineB+lineC || lineA < Math.abs(lineB-lineC))&&(lineB>lineA+lineC || lineB < Math.abs(lineA-lineC))&&(lineC>lineA+lineB || lineC < Math.abs(lineB-lineA))){
    return false;
  } else {
    return true;
  }
}
// Desafio 13
function hydrate(string) {
  const numbers = string.match(/\d+/g).map(Number); // Deve se usar o map number para converter a saída de array string para array de números
  let soma =0;
  for(let i=0;i<numbers.length;i+=1){
    soma += numbers[i];
  }
  if(soma > 1){
    return `${soma} copos de água`;
  } 
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
