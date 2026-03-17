// matrizTransposta.js

function transporMatriz(A) {
  const linhas = A.length;        // quantidade de linhas
  const colunas = A[0].length;    // quantidade de colunas (assumindo matriz "retangular")

  const T = []; // matriz transposta

  // Para cada coluna da matriz original, vair criar uma linha na matriz transposta.
  for (let j = 0; j < colunas; j++) {
    T[j] = []; // cria a linha j transposta

    // pega os elementos de cada linha i
    for (let i = 0; i < linhas; i++) {
      T[j][i] = A[i][j]; // troca (linha, coluna) para (coluna, linha)
    }
  }

  console.log("Matriz original:");
  console.log(A);

  console.log("Matriz transposta:");
  console.log(T);
}

const A = [
  [1, 2],
  [3, 4],
  [5, 6]
];

transporMatriz(A);
