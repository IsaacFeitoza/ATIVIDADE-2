//PRIMEIRA QUESTÃO:
function soma(n1: number, n2: number){
  let soma = n1 + n2;
   for (let i = n1; i < n2; i++){
   console.log(`Valor da soma:`, n1+=(i+1))
  
 }
}
 soma(5,10)
 
 
 
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