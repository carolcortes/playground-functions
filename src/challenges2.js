// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of array) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 12).join('')}`;
}
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    triangle = true;
  }
  return triangle;
}

// Desafio 13
function hydrate(string) {
  let numbers = /\d+/g;
  let soma = 0;
  for (let value of string.match(numbers)) {
    soma += parseInt(value);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
