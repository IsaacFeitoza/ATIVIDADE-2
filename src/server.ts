//PRIMEIRA QUESTÃO:
function soma(n1: number, n2: number){
    
    let soma = n1 + n2;
    console.log(`Valor da soma:`, soma)
  }
  
  soma(10,20)
 
 
 
  //SEGUNDA QUESTÃO:
 class Pessoa{
   nome: string;
   idade: number;
   
 
   constructor(nome: string, idade: number,){
          this.nome = nome;
         this.idade = idade;
       
   }
   
   humano(): void{
     console.log(`Olá ${this.nome}`);
   }
   
   anos(): void{
     console.log(`A sua idade é de ${this.idade} anos, e tem ${this.idade * 12} meses de vida.`);
   
    }
 }
 
 let pessoa = new Pessoa('Isaac', 18)
 
 pessoa.humano();
 pessoa.anos();