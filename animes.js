
class ClubeFutebol
{
    constructor(nome, cidade, divisao)
    {
        this.nome = nome;
        this.cidade = cidade;
        this.divisao = divisao;
    }

    apresentacao()
    {
        console.log(`Clube ${this.nome}, da cidade de ${this.cidade}, Atualmente na ${this.divisao}, Pais ${this.pais}.`);
    }
}




class ClubeNacional extends ClubeFutebol     //class ClubeNacional herdando class ClubeFutebol| com o elemento (EXTENDS)
{
    constructor(nome, cidade, pais, divisao)
    {
        super(nome, cidade, divisao);       //chamando class PAI (ClubeFutebol)
        this.pais = pais;
    }    
}


class ClubeInternacional extends ClubeFutebol     //chamando class PAI (ClubeFutebol)
{
    constructor(nome, cidade, pais, divisao, titulosInternacionais)
    {
        super(nome, cidade, divisao);
        this.pais = pais;
        this.titulosInternacionais = titulosInternacionais;
    }   
    
    apresentacao() 
    {
        console.log(`Clube ${this.nome}, da cidade de ${this.cidade}, Atualmente na ${this.divisao}, Pais ${this.pais}.`);
    }
}


const clubeNacional = new ClubeNacional('Palmeiras', 'Sao Paulo', 'Brasil', 'Primeira Divisao', 1);
const clubeInternacional = new ClubeInternacional('Barcelona', 'Barcelona', 'Espanha', 'Primeira Divisao', 30)

clubeNacional.apresentacao();
clubeInternacional.apresentacao();
