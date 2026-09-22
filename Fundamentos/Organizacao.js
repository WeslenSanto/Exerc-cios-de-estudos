// Aaula 1 - Organizacao de codigo.

console.log("Sentenca de codigo") // Organizacao de codigo é em blocos por chaves. 
{
    {
        console.log("olá"); //padrao com ponto e virgula.
        console.log("mundo"); //Padrao com ponto e virgula.
    }
}  

// Aula 2 - Comenatarios.
/*

comentarios 

*/

//


//Aula 3 Variaveis e Constantes.

let nome = "Lucas"; // variavel do tipo string.
let idade = 20; // variavel do tipo number.

const pi = 3.14; // constante do tipo number.

var sobrenome = "Silva"; // variavel do tipo string. (Evitar o uso de var, pois é uma variavel global.) 

//javascript é uma linguagem fracamente tipada, ou seja, não é necessario declarar o tipo da variavel.
// case sensitive, ou seja, diferencia maiusculas de minusculas.

var a = 3 
let b = 4 

var a = 30
let b = 40

console.log(a, b) // 30, 40;    

a = 300
b = 400 

console.log(a, b) // 300, 400;  

const c = 5
// c = 50 // erro, pois constante não pode ser alterada.   
console.log(c) // 5;  





