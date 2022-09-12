

// declaration

    var name

// assignment

    name = "Igor"

// tipo de dado

    console.log(typeof name)


// agrupamento de declarações
    let age, isHuman

    age = 20
    isHuman = true


// multiplos argumentos na função
        console.log(name, age, isHuman)


// escrita de texto + variáveis

// concatenando valores
        console.log("o", name, "tem", age, "anos")
        console.log("o " + name + " tem " + age + " anos.")


// interpolando valores com template literals/strings (``)
    console.log(`o ${name} tem ${age} anos`)




// Object

    const person = 
    {
        name: "Igor",
        age: 20,
        weight: 70,
        isAdmin: true
    }

    console.log(`${person.name} tem ${person.age} anos.`)




// Array

    const animals =
    [
        "Lion",
        "Monkey",
        "Cat"
    ]

    // acessar valores dentro do array
    console.log(animals[0])

    // tamanho do array
    console.log(animals.length)

    const people =
    [
        "Igor",
        "Jonas",
        {
            name: "Junio",
            age: 20
        }
    ]

    // acessando objetos dentro do array
    console.log(people[2].name)




/*
    Prototype

        * prototype-based language
        * prototype chain
        * __proto__
        * 
    ".proto" em qualquer conteúdo irá trazer propriedades de protótipos anteriores
*/




/* 
    Type conversion (typecasting) vs Type coersion

        * Alteração de um tipo de dado para outro
*/

// mostra "95" -> coersion do js em transformar o number 5 em "5" como string
console.log("9" + 5)

// mostra 14 -> conversion nossa/js em transformar a string "9" em um number
console.log(Number("9") + 5)




// MANIPULAÇÃO DE STRINGS E NUMBERS


// transformando string em number
let string = "123"
console.log(Number("123"))

// transformando number em string
let number = 321
console.log(String(321))


// Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = "Paralelepípedo"
console.log(word.length)

let number2 = 10456293
console.log(String(number2).length)


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number3 = 32.44345

// toFixed é uma função atrelada ao objeto Number, quando uma função é atrelada a um objeto é chamado de método (method)
console.log(number3.toFixed(2).replace(".",","))
// o retorno da função toFixed é uma string, por isso podemos atrelar mais métodos como "replace"




// MANIPULAÇÂO DE STRINGS


// Transforme letras minúsculas em maiúsculas, e vice-versa

let word2 = "rafeize come lixo"

// minúsculas
console.log(word2.toLowerCase())

// maiúsculas
console.log(word2.toUpperCase())


// Verificar se o texto contém a palavra Igor

let phrase = "eu gostumfs, Igor"
console.log(phrase.includes("Igor"))
// a função "includes" é case-sensitive




// MANIPULAÇÃO DE STRINGS E ARRAYS


// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"

let phrase2 = "teste teste teste teste teste"

// transforma a String em um Array através do "split" excluindo os espaços
let myArray = phrase2.split(" ")

// transforma o Array em uma String através do "join" adicionando "_" onde teria espaços
let phraseWithUnderscore = myArray.join("_")

// mostra o resultado
console.log(phraseWithUnderscore)




// MANIPULAÇÂO DE ARRAYS


// Criar array com construtor

let myArray2 = new Array("a", "b", "c")

console.log(myArray2)


// Contar elementos de um array e manipulação de dados

console.log
([
    "a", 
    {type: "array"}, 
    function(){ return "alo"}
].length)

// por um dos elementos ser um objeto, podemos usar uma propriedade "type"

console.log
([
    "a", 
    {type: "array"}, 
    function(){ return "alo"}
][1].type)

// por um dos elementos ser uma função, podemos executá-la

console.log
([
    "a", 
    {type: "array"}, 
    function(){ return "alo"}
][2]())


// Transformar uma cadeia de caracteres em elementos de um array

let word3 = "manipulação"
// podemos atrelar o method "from" no objeto global "Array" 

console.log(Array.from(word3))
// o method "from" espera uma String, para transformar cada caracter em um elemento de um array





// MANIPULANDO ARRAYS

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")


// adicionar um item no começo
techs.unshift("SQL")


// remover do fim
techs.pop()


// remover do começo
techs.shift()


// pegar somente alguns elementos do array
console.log(techs.slice(1,3))   
// o primeiro parâmetro se refere a qual índice do array começar, e o segundo se refere a quantidade de posições que eu quero contar, no caso irei contar os 3 itens porém o retorno será no começo do "css"


// remover 1 ou mais itens em qualquer posição do array
techs.splice(1,1)
// o primeiro se refere ao índice do elemento que quero tirar, e o segundo quantos elementos depois dele também quero tirar, no caso quero tirar o "css" e somente ele


// encontrar a posição de um elemento no array
let position = techs.indexOf("css")
// retiro o elemento a partir da posição achada
techs.splice(position,1)

console.log(position)
console.log(techs)





/* 
    Expressões e Operadores
        - Expressions
        - Operators
            Binary
            Unary
            Ternary
*/


let number4 = 1

// Binary

console.log(number4 + 1)

// Unary

console.log(++number4)
console.log(--number4)

// Ternary

console.log(true ? "ola" : "nada")




/*
    new
        * left-hand-side expression
        * criar um novo objeto
*/

let nome = new String("Igor")
nome.surName = "Martins"
let age2 = new Number(20)


console.log(nome.surName, age2)



/*
    Operadores unários
        - typeof
        - delete
*/

const person2 =
{
    name: "Igor",
    idade: 22
}

// tipagem do dado

console.log(typeof idade)

// delete
delete person2.idade

console.log(person2)






// OPERADORES ARITMÉTICOS

// multiplicação (*)
console.log(3.2 * 5.3)

// divisão (/)
console.log(12 / 2)

// soma (+)
console.log(34 + 82)

// subtração (-)
console.log(92 - 121)

// resto da divisão (%)
let remainder
remainder = 11 % 3
console.log(remainder)

// incremento (++)
let increment = 0
increment++
console.log(increment)

// decremento (--)
let decrement = 0
console.log(--decrement)


// exponencial (**)
console.log(3 ** 4)




// Grouping operator ( )

let total = (2 + 5) * 3
console.log(total)



// OPERADORES DE COMPARAÇÂO

// Irá comparar valores e retornar um boolean como resposta

let one = 1
let two = 2


// igual a ( == )
console.log(two == 1)
console.log(one == 1)


// diferente de ( != )

console.log(one != two)
console.log(one != 1)
console.log(one != "1")


// estritamente igual a ( === ) 
// estritamente = valor e tipo de dado
console.log(one === "1")
console.log(one === 1)


// estritamente diferente de ( !== ) 
// estritamente = valor e tipo de dado
console.log(two !== "2")
console.log(two !== 2)


// Maior que ( > )
console.log(one > two)


// Maior igual a ( >= )
console.log(one >= 1)
console.log(two >= 1)


// Menor que ( < )
console.log(one < two)


// Menor igual a ( <= )
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)



// OPERADORES DE ATRIBUIÇÂO (ASSIGNMENT)

let x

// assignment
x = 1

// addition assignment
x += 2

// subtraction assignment
x -= 1

// multiplication assignment
x *= 2

// division assignment

x /= 2

// remainder, exponetiation

x %= 2

x **= 2




// OPERADORES LÓGICOS

//    - 2 valores booleanos

let pao = true
let queijo = true

// AND ( && )
console.log(pao && queijo)

// OR ( || )
console.log(pao || queijo)

// NOT ( ! )
// operador de negação -> troca false por true e vice-versa
console.log(!pao)




// OPERADOR CONDICIONAL (TERNÁRIO)

// condição então valor1 se não valor2 --> condition ? value1 : value2

let pao2 = true
let queijo2 = true

const paoComQueijo = pao2 && queijo2 ? "pão com queijo" : "sem pão ou queijo"

console.log(paoComQueijo)

let age3 = 16

const canDrive = age3 >= 18 ? "Pode dirigir" : "Não tem idade para dirigir"

console.log(canDrive)




// STRING OPERATOR

// comparison
console.log("a" == "a")
// true

// concatenation
// retorna a união de duas Strings
console.log("a" + "a")
// aa

let alpha = "alpha"
alpha += "bet"
console.log(alpha)
// alphabet




// FALSY E TRUTHY

// O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'falso' )
//já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )



// OPERADORES
/* De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/




// IF E ELSE

let temperature = 37.5

let highTemperature = temperature >= 38

let mediumTemperature = temperature >= 37 && temperature < 38


if(highTemperature)
{
    console.log("Febre alta")
} 
else if(mediumTemperature)
{
    console.log("Febre moderada")
} 
else
{
    console.log("Saudável")
}




// SWITCH

let expression = "a"

switch(expression)
{
    case "a":
        // código
        console.log("a")
        break
    
    case "b":
        // código para expression b
        console.log("b")
        break

    // não cumpriu nenhum dos casos -> default
    default:
        // código
        console.log("default")
        break
}

// exemplo de calculadora com switch


function calculator(number1, operator, number2)
{
    let result = 0;

    switch(operator)
    {
        case "+":
            result = number1 + number2
            break
        
        case "-":
            result = number1 - number2
            break
        
        case "*":
            result = number1 * number2
            break 

        case "/":
            result = number1 / number2
            break

        default:
            console.log("não implementado")
            break
    }

    return result
}

console.log(calculator(4, "*", 5))




// THROW

/* 
    Fluxo da aplicação:
        -> função registrada
        -> "try" executa a função
        -> pelo "nome3" estar vazio, irá cair no "throw"
        -> "throw" dispara o aviso "Nome é obrigatório"
        -> "catch" captura o aviso (erro) do "throw"
        -> "catch" mostra o erro através do console.log
*/


function myName(nome3 =  "")
{
    if (nome3 === "")
    {
        throw new Error("Nome é obrigatório")
    }

    // throw para a execução da função, logo não irá mostrar o "depois do erro"
    console.log("depois do erro")
}

// try catch
// caso rode a aplicação sem o "try catch", aparecerá um erro "Uncaught" no console (erro não capturado)

try 
{
    myName()    // try executa a função
} catch(e)      // catch precisa receber algum parâmetro
{
    console.log(e)
}

// try catch executa o programa até o final, mesmo após pegar o erro
console.log("depois do erro")




// ESTRUTURAS DE REPETIÇÂO


// FOR

/* 
    fluxo do for:
        -> declaração da variável
        -> verifica se ela é menor que 10 
        -> executa o bloco se for verdadeiro
        -> quando acabar o bloco, incrementa 1 na variável
        -> volta pro loop
*/

// "break" -> para a execução do loop

for(let i = 100; i > 0; i--)
{
    if(i === 50)
    {
        break;
    }

    console.log(i)
}

// "continue" -> pula a execução do momento

for(let i = 10; i > 0; i--)
{
    if(i === 5)
    {
        // o "continue" faz com que ignore o elemento em questão (5) e volte para o loop, fazendo com que apenas o 5 seja excluído
        continue;
        break;
        // no caso o break não irá parar a aplicação
    }
    
    // o print será do 10 até o 1, porém sem o 5
    console.log(i)
}



// WHILE

// while é usado para quando não sabemos o momento da parada da repetição

let i = 200

while(i > 10)
{
    console.log(i)

    i /= 5
    // ele irá dividir "i" por 5 até que o resultado da divisão seja maior que 10
    // no caso irá parar no 40, pois 40 / 5 seria 8, e 8 é não é maior que 10
}



// FOR OF

// cria um loop através de alguma variável previamente declarada


let meuNome = "Igor"

// irá pegar cada caracter da variável "meuNome"
for(let char of meuNome)
{
    // impressão de "I", "g", "o", "r"
    console.log(char)
}


// podemos fazer com Array também

let nomes = ["João", "Paulo", "Pedro"]

// a partir de uma variável qualquer, ele mostra cada elemento do Array
for(let variável of nomes)
{
    // impressão de "João", "Paulo", "Pedro"
    console.log(variável)
}



// FOR IN

// cria um loop em cima de um objeto, pegando as propriedades do objeto


// criação do objeto
let pessoa = 
{
    nomePessoa: "Igor",
    idadePessoa: 20,
    pesoPessoa: 75
}

// criar um loop para pegar cada propriedade do objeto
for(let property in pessoa)
{
    // imprime as propriedades e não os valores
    console.log(property)

    // imprime apenas os valores das propriedades
    console.log(pessoa[property])
    // property será convertido em uma String, no caso as propriedades do objeto
}