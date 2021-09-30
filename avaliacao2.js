const Aluno = require("./avaliacao");
let turma = require("./avaliacao");

let listaAlunos = require("./teste");

function Curso(nCurso, aprovacao, maxFaltas, novaLista) {
  this.nCurso = nCurso;
  this.aprovacao = aprovacao;
  this.maxFaltas = maxFaltas;
  this.novaLista = novaLista;

  this.maisAluno = function (nome, qtdfaltas, notas) {
    this.novaLista.push({ nome, qtdfaltas, notas });
    // (new estudantes.AddAluno(nome, qtdfaltas, notas))
  };

  this.calculaAprovacao = function (ava) {
    if (
      ava.calcularMedia() >= this.aprovacao &&
      ava.qtdfaltas < this.maxFaltas
    ) {
      return true;
    } else if (
      ava.calcularMedia() >= this.aprovacao &&
      ava.qtdfaltas == this.maxFaltas
    ) {
      if (ava.calcularMedia() >= this.aprovacao * 1.1) {
        return true;
      } else return false;
    } else return false;
  };
  this.resultados = function () {
    let lista = [];
    for (let estudante of this.novaLista) {
        lista.push(this.calculaAprovacao(novaLista));
    }
    return lista;
}
}
module.exports = Curso;

let programacao = new Curso("Programacao Interativa", 7, 3, turma);
console.log(programacao);

