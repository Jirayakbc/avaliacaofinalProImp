const Aluno = require('./avaliacao');
let turma = require('./avaliacao');

let listaAlunos = require('./teste');

function Curso(nCurso, aprovacao, maxFaltas, novaLista) {
    this.nCurso = nCurso;
    this.aprovacao = aprovacao;
    this.maxFaltas = maxFaltas;
    this.novaLista = novaLista;

    this.maisAluno = function (nome, qtdfaltas, notas) {
        this.novaLista.push({ nome, qtdfaltas, notas })
        // (new estudantes.AddAluno(nome, qtdfaltas, notas))
    }

    this.calculaAprovacao = function (ava) {
        if (ava.calcularMedia() >= this.aprovacao && ava.qtdfaltas < this.maxFaltas) {
            return true;
        } else if (Aluno.calcularMedia() >= this.aprovacao && Aluno.qtdfaltas == this.maxFaltas) {
            if (Aluno.calcularMedia() >= (this.aprovacao * 1.1)) {
                return true;
            } else return false;
        }
        else return false;

    }
}

let programacao = new Curso("Programacao Interativa", 7, 3, turma);
console.log(programacao)

module.exports = Curso;