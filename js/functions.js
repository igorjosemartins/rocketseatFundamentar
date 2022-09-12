
// Functions



// declaration
function createPhrases()
{
    console.log("Teste 01")
    console.log("Teste 02")
    console.log("Teste 03")
}


// run
createPhrases()




// FUNCTION EXPRESSION / ANONYMOUS


// parameters
const sum = function(number1, number2)
{
    let total = (number1 + number2)
    return total
    // return serve para retornar o valor para função, para evitar undefined
}

// arguments
// sum(3,4)

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

// função = vc da parâmetros ela retorna algo


function vitamina(fruta1, fruta2)
{
    return "vitamina de " + fruta1 + fruta2
}

const copo = vitamina("banana", "maçã")

console.log(copo)




// FUNCTION SCOPE

let subject

function createThink()  
// caso tiver um parâmetro na função como "subject", este será diferente do outro anteriormente criado 
// se não tiver ele vai buscar o mesmo "subject" e vai atualiza-lo
{
    subject = "study"
    return 
}

console.log(subject)    // não há nada
createThink()           // a função é executada e atualiza o "subject"
console.log(subject)    // mostra o subject atualizado com o valor "study"




// FUNCTION HOISTING


// funciona, por conta do hoisting, é como se o js organizasse o código
sayMyName()

function sayMyName()
{
    console.log("Igor")
}


// não funciona, por conta do var/const/let
sayMyName()

var sayMyName = function()
{
    console.log("Igor")
}

// é o mesmo que:

var sayMyName   // sobe como variável por conta do hoisting

sayMyName()     // tenta iniciar uma função que ainda não existe e da pau

sayMyName = function()  // agora transforma a variável em função mas para por conta do erro
{
    console.log("Igor")
}




// ARROW FUNCTION 

// é geralmenta atribuída a uma const

const sayMyName = () => { console.log("Igor")}

sayMyName()




// CALLBACK FUNCTION

// é criada a função com o parâmetro "igor"
function sayMyName(jonas) 
{
    // texto antes do callback
    console.log("antes de executar o callback")

    // callback com o nome do parâmetro q foi dado
    jonas()

    // depois do callback
    console.log("depois de executar o callback")
}


// criação do callback
sayMyName
(
    // arrow function com qualquer parâmetro dado
    () =>
    {
        console.log("callback") // exemplificação do callback
    }
)

    
    

 
/* FUNCTION CONSTRUCTOR
        - expressão new
        - cria novos objetos
        - this keyword
*/

function Person(name)
{
    // este this vai sempre se referenciar a variável fora
    this.name = name

    // podemos criar uma função também
    this.walk = function()
    {
        return this.name + " está andando"
    }
}

// esta variável vai sempre se referenciar ao this em cima
const igor = new Person("Igor")
const joao = new Person("João")

// pra chamar a função = variável.nomefunção()
console.log(igor.walk())
console.log(joao.walk())


// outras functions

let name = new String("Igor")

console.log(name)



let date = new Date("2022-08-12")

console.log(date)
