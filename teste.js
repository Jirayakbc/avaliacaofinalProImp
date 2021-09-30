let Aluno = require('./avaliacao')
let cursos = require('./avaliacao2')

let aluno1 = new Aluno('Aluno1', 11, [10,6,9]);
let aluno2 = new Aluno('Aluno2', 3, [8,6,3]);
let aluno3 = new Aluno('Aluno3', 2, [6,9,6]);
let aluno4 = new Aluno('Aluno4', 1, [10,6,5]);

let listaAlunos = [aluno1, aluno2, aluno3, aluno4];

// console.log(listaAlunos)

// console.log(aluno1);
// console.log(cursos)
console.log(aluno1.calcularMedia().toFixed(2));
console.log(aluno1.totFaltas());

module.exports = listaAlunos;