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


// Felipe Roberto Rocha, Turma 1. Professor, desculpe a demora, acabei fazendo durante o horario do trabalho
// Realizei de algumas maneiras para entender e aplicar a lógica conforme solicitadodo.