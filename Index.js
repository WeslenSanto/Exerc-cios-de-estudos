
//let produtos = ["computador", "telefone", "mouse", "teclado"]; 

//let total = produtos.reduce((acumulador,numero,indice, original)=>{
    //console.log(`${acumulador} - total de produtos`);
    //console.log(`${numero} - valor do produto`);
    //console.log(`${indice} - indice atual`);
    //console.log(`${original} - arry original`);

    //return acumulador+= numero;   
//})

//console.log("Total de produtos é " + total); 


let produtos = ["computador", "telefone", "mouse", "teclado"];

let total = produtos.reduce((acumulador, produto) => {
    return acumulador + 1;
}, 0);

console.log(produtos);

produtos.forEach((produto, indice) => {
    console.log(`${indice + 1} - ${produto}`);
});

console.log(produtos);
console.log(`Quantidade total: ${total}`);