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
let b1 = 4 

var a = 30
let b = 40

console.log(a, b) // 30, 40;    

a = 300
b = 400 

console.log(a, b) // 300, 400;  

const c = 5
// c = 50 // erro, pois constante não pode ser alterada.   
console.log(c) // 5;  

//aula 4 - Tipos de dados, tipagem fraca e dinamica.

let nome1 = "Lucas"; 
let idade1 = 20;
let altura1 = 1.80;
let estudante1 = true;

console.log(typeof nome1, idade1,  altura1, estudante1);

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)    

//evitar nomes genéricos e siglas, como: "valor", "numero", "pessoa", "objeto", "coisa", "qualquer" e etc.
let valor = ''
let numero = 1
let pqp = false // Produto Quimico Perigoso... kkk

//aula tipos em javascript:Number

let idade2 = 20;
console.log(typeof idade2);

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // false

const avaliacao1 = 9.871 
const avaliacao2 = 6.871 

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)   

console.log(media.toFixed(2))   
console.log(media.toString(2))  // em binário 
console.log(typeof media)
console.log(typeof Number)

// aula 5 Numeros e alguns cuidados, e operaçoes estranhas      

console.log(7 / 0 ) // infinity
console.log("10" / 2) // o javascript identifica que e um numedo e retorna o valor, mas se tiver . algum outro numero ele vai retornar como nao é um numero NaN.
console.log("show!" * 2) // NaN
console.log(0.1 + 0.7) // 0.7999999999999999    
console.log(10()) // 1010
console.log((10.345).toFixed(2))

// aula 6 Usando API Math, e Operações e API String 

const raio = 5.6 
const area = Math.PI * Math.pow(raio, 2) // Math.pow(raio, 2) é o mesmo que raio * raio
console.log(area.toFixed(2)) // 98.52 

const nome2 = "SiloPrime3"
console.log(nome2.charAt(9)) // 9
console.log(nome2.charCodeAt(9)) // 80
console.log(nome2.indexOf('3')) // 9  

console.log(nome2.substring(0, 3)) // Sil
console.log(nome2.substring(0, 3).concat("Prime")) // SilPrime
console.log(nome2.replace('3', '')) // SiloPrime    

console.log('Ana,Maria,Pedro'.split(',')) // [ 'Ana', 'Maria', 'Pedro' ]


//aula 7 - Template String

const nome3 = "Lucas"
const idade3 = 20
console.log(`Meu nome é ${nome3} e minha idade é ${idade3}`) // Meu nome é Lucas e minha idade é 20

const nome4 = 'rebeca'
const concatenacao = 'olá' + nome4 + '!'
const template = `
    olá
    ${nome4}!`
console.log(concatenacao, template) // olá rebeca! olá rebeca!  

//expressoes

const up = texto => texto.toUpperCase() // arrow function
console.log(`Ei... ${up('cuidado')}!`) // Ei... CUIDADO!       

// aula 8 tipos Booleanos

let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!! isAtivo)

// resultados verdadeiro

console.log('os verdadeiro...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtivo = true))

// resultados falsos

console.log('os falsoes...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || ' ' ))

let nomeclatura = ''
console.log(nomeclatura || 'desconhecido')


//Aula 9 Arry 

const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores = [4] = 10  
console.log(valores)
console.log(valores.length)

valores.Push({id: 3}, false, null, 'teste' )
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)