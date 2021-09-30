// Passo 1
function Aluno(nome, qtFaltas, notas){
    this.nome=nome;
    this.qtFaltas=qtFaltas;
    this.notas=notas;

    this.calcularMedia = () => {
    let media = this.notas.reduce((antes, depois) => antes + depois) / this.notas.length;
    return media;

    };
    this.totFaltas = () => this.qtFaltas += 1;
}




module.exports = Aluno;
