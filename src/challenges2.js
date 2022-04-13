// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(array) {
  let cont = 0;
  let r = `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7).join('')}`;
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] === array[index + 1]) {
      cont += 1;
    }
    if (array[index] > 9 || array[index] < 0 || cont >= 3) {
      r = 'não é possível gerar um número de telefone com esses valores';
    }
    if (array.length !== 11) {
      r = 'Array com tamanho incorreto.';
    }
  }
  return r;
}

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
