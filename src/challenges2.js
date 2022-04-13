// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
