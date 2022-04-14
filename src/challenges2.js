// Desafio 11
// eslint-disable-next-line sonarjs/cognitive-complexity
// eslint-disable-next-line complexity
function generatePhoneNumber(array) {
  let cont = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in array) {
    cont = 0;
    for (let number of array) {
      if (array[index] === number) {
        cont += 1;
      }
    }
    if (array[index] > 9 || array[index] < 0 || cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
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
