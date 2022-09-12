
const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"] 

// acessar o tamanho do array

console.log(pilotos.length)

// iterável
// for (let piloto of pilotos) {
//     console.log(piloto)
// }


// adicionar um elemento
pilotos.push("Alonso")


// encontrar um elemento
// find tem que receber uma função q recebe como argumento o piloto
const senna = pilotos.find(piloto => piloto === "Senna")


// deletar um elemento
// index, value
pilotos.splice(1, 1)

console.log(pilotos)
