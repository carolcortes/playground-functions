// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(array) {
  let maior = array[0];
  let cont = 0;
  for (let number of array) {
    if (number >= maior) {
      maior = number;
    }
  }
  for (let number of array) {
    if (number === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let result = '';
  if (dist1 < dist2) {
    result = 'cat1';
  } else if (dist1 > dist2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
// eslint-disable-next-line sonarjs/cognitive-complexity
function fizzBuzz(array) {
  for (let index in array) {
    if (array[index] % 15 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
// eslint-disable-next-line sonarjs/cognitive-complexity
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  // eslint-disable-next-line guard-for-in
  for (let key in code) {
    for (let letter of string) {
      if (key === letter) {
        string = string.replace(key, code[key]);
      }
    }
  }
  return string;
}
// eslint-disable-next-line sonarjs/cognitive-complexity
function decode(string) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  // eslint-disable-next-line guard-for-in
  for (let key in code) {
    for (let number of string) {
      if (key === number) {
        string = string.replace(key, code[key]);
      }
    }
  }
  return string;
}

// Desafio 10
function techList(tech, name) {
  let obj = {};
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let value of tech.sort()) {
    obj.tech = value;
    obj.name = name;
    result.push(obj);
    obj = {};
  }
  return result;
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
