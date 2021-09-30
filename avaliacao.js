// Passo 1
function Aluno(nome, qtfaltas, notas){
    this.nome=nome,
    this.qtFaltas=qtfaltas,
    this.notas=notas,

    // this.calcularMedia = function(){
    //     let somaNotas = 0;
    //     for (const notas of this.listaAlunos.notas) {
    //         somaNotas = notas + notas
    //     }
    //     return somaNotas/notas.length
    // }

    // this.calcularMedia = function () {
    //     let media = 0;
    
    //     for (let total of this.notas) {
    //         media = media + total.notas;
    //     }
    
    //     return media / this.notas.length;
    //     }
    this.calcularMedia = () =>{
        let media = this.notas.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / this.notas.lenght
        return media
    }
    this.faltas = function () {
    this.qtdFaltas += 1;
    }
}


let aluno1 = new Aluno('Aluno1', 11, [10,6,9]);
let aluno2 = new Aluno('Aluno2', 3,[8,6,3]);
let aluno3 = new Aluno('Aluno3', 2, [6,9,6]);
let aluno4 = new Aluno('Aluno4', 1, [10,6,5]);

let listaAlunos = [aluno1, aluno2, aluno3, aluno4];

console.log(listaAlunos)

module.exports = listaAlunos=listaAlunos;

