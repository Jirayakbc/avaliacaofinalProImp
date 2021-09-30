const turma = require('./avaliacao')

function Curso(nCurso, aprovacao, maxFaltas, novaLista) {
    this.nCurso = nCurso;
    this.aprovacao = aprovacao;
    this.maxFaltas = maxFaltas;
    this.novaLista = novaLista;

    this.maisAluno = function (nome, qtdfaltas, notas) {
        this.novaLista.push({ nome, qtdfaltas, notas })
    }

    this.calculaAprovacao = function (turma) {
        if (turma.calcularMedia() >= this.aprovacao && turma.qtdfaltas < this.maxFaltas) {
            return true;
        } else if (turma.calcularMedia() >= this.aprovacao && turma.qtdfaltas == this.maxFaltas) {
            if (turma.calcularMedia() >= (this.aprovacao * 1.1)) {
                return true;;
            } else return false;;
        }
        else return false;;

    }
}

let programacao = new Curso("Programacao Interativa", 7, 3, turma);

console.log(programacao)

