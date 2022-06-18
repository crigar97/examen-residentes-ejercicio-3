const calcMaximoComunDivisor = (a, b) => {
  let temporal;
  while (b !== 0) {
    temporal = b;
    b = a % b;
    a = temporal;
  }
  return a;
};

const calcMinimoComunMultiplo = (a, b) => {
  return (a * b) / calcMaximoComunDivisor(a, b);
};

/**
 * Este algoritmo resuelve una sistema de ecuacione de 2x2 por el método de eliminación.
 * @param {Array} matriz 
 * @returns Array
 */
const metodoEliminacion = (matriz) => {
  let x1 = matriz[0][0];
  let x2 = matriz[1][0];
  let minimoComunMultiplo = calcMinimoComunMultiplo(x1, x2);
  let multipliers = [(minimoComunMultiplo / x1), (-1 * (minimoComunMultiplo / x2))];
  let temp = [...matriz];
  for (let i = 0; i < matriz.length;  i++) {
    for (let j = 0; j < matriz[0].length;  j++) {
      let multiplier = multipliers[i];
      temp[i][j] *= multiplier;
    }
  }
  let sum = [0, 0, 0];
  for (let i = 0; i < matriz.length;  i++) {
    for (let j = 0; j < matriz[0].length;  j++) {
      sum[j] += matriz[i][j];  
    }
  }
  let y = ((sum[2] - sum[0]) / sum[1]);
  let x = ((matriz[0][2] - (matriz[0][1] * y)) / matriz[0][0]);
  return [x, y];
};

/**
 *  x + 2y = 4
 * 2x +  y = 5
 */
let matriz = [[1, 2, 4], [2, 1, 5]];
let result = metodoEliminacion(matriz);
console.log(result);