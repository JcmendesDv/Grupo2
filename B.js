function Candidato(id,nome,partido) {
    this.id = id;
    this.nome = nome;
    this.partido = partido;
};

candidato1 = new Candidato(2222,"Jose","Esportes");
console.log(candidato1);

function votar(id) {
    
    if(id == 2222) {
       return `Votou em ${candidato1.nome}`
    }else{
        return `Candidato não encontrado!`
    }
}

console.log(votar(2222));