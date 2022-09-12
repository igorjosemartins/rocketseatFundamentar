
// SELECIONANDO ELEMENTOS

// getElementById() (ELEMENT)

const element = document.getElementById("blog-title")

console.log(element)



// getElementsByClassName() (HTMLCollection)

const element2 = document.getElementsByClassName("subtitle")

console.log(element2)



// getElementsByTagName() (HTMLCollection)

// tags html = "head" | "body" | "footer" | "h1" | "h2"...
const element3 = document.getElementsByTagName("body")

console.log(element3)



// querySelector() (ELEMENTS)

// podemos pegar classes, ids, tags, através de seletores CSS 
const element4 = document.querySelector(".subtitle")

console.log(element4)



// querySelectorAll() (NODELIST)

const elements = document.querySelectorAll(".class")

console.log(elements)

// com Nodes, podemos fazer forEach, já com  HTMLCollection não, por isso optamos por querySelectors
elements.forEach(el => console.log(el))







// MANIPULANDO CONTEÚDOS

// textContent -> podemos alterar/adicionar a um CONTEÚDO e mostrar

const element5 = document.querySelector("h1")

element5.textContent = "Olá !!!"

console.log(element.textContent)



// innerText -> adiciona/troca o TEXTO do html

const element6 = document.querySelector("h2")

element6.innerText = "Lorem ipsem"



// innerHTML -> podemos alterar o próprio HTML

const element7 = document.querySelector("h2")

element7.innerHTML = "Lorem <small>ipsem</small>"



// value -> manipular valor de um input / ou outro que receba um value

const element8 = document.querySelector("input")

element8.value = "teste"

console.log(element8.value)



// MANIPULANDO ATRIBUTOS

/* 
    setAttribute -> adição de atributos
    getAttribute -> seleção de atributos
    removeAttribute -> 
*/

const header = document.querySelector("header")
 
header.setAttribute("id", "header")


const headerID = document.querySelector("#header")
 
console.log(headerID.getAttribute("id"))

 
header.removeAttribute("id")

header.setAttribute("class", "classe-header")







// MANIPULANDO ESTILOS E CLASSES

// .style
const element9 = document.querySelector("body")

// podemos setar valores CSS como:
element9.style.backgroundColor = "#f9f3d2"

// também podemos pegar o valor no console
console.log(element9.style.backgroundColor)



// classList

const element10 = document.querySelector("body")

// classList.add() -> adiciona uma classe ja dita no código
element10.classList.add("active", "green")

console.log(element10.classList)

// classList.remove() -> remove uma classe
element10.classList.remove("active")

// element10.classList.toggle() -> interruptor de classe, liga se tiver desligado, desliga se tiver ligado
element10.classList.toggle("active")







// NAVEGANDO PELOS ELEMENTOS


// ELEMENTOS PAI
//parentNode | parentElement

const body = document.querySelector("body")

// pega a tag pai da tag escolhida
console.log(body.parentNode)



// ELEMENTOS FILHO

// * Nodes levam os espaços vazios do html em consideração
// * HTMLCollectors (Elements) ignoram os espaços vazios 

// childNodes | children

const el = document.querySelector("body")

console.log(el.childNodes)

// firstChild | firstElementChild -> mostra a primeira tag

console.log(el.firstElementChild)

// lastChild | lastElementChild -> mostra a ultima tag

console.log(el.lastElementChild)



// ELEMENTOS IRMÂO

// * Nodes levam os espaços vazios do html em consideração
// * HTMLCollectors (Elements) ignoram os espaços vazios 

const el2 = document.querySelector("header") 

// nextSibling | nextElementSibling -> pega o próximo

console.log(el2.nextElementSibling)

// previousSibling | previousElementSibling -> pega o anterior

console.log(el2.previousElementSibling)






// CRIANDO ELEMENTOS

// createElement()

const div = document.createElement("div");
div.innerText = "Testando..."

const body2 = document.querySelector("body")

// adiciona tag no começo do "body"
body2.append(div)

// adiciona a tag no final do "body"
body2.prepend(div)



// insertBefore()

// criação da tag
const div2 = document.createElement("div2");
div2.innerText = "Testando222..."

// seleção das tags para inserir a anterior antes
const body3 = document.querySelector("body")
const script = document.querySelector("script")

// no body, insira "div2" antes de "style" 
body3.insertBefore(div2, script)


// como inserir "depois"

// seleção da tag que eu quero inserir depois
const header2 = body.querySelector("header")

// vou inserir antes do próximo elemento da header, ou seja, depois da header
header2.insertBefore(div2, header.nextElementSibling)






// EVENTOS

// via HTML -> "on"

/*
    onclick
    ondblclick
    onmousehover
    ...etc

    <h1 onclick="funçãoqualquer()"></h1>    
*/

function print() {
    console.log("print")
}



// via Teclado

// onkeypress | onkeydown | onkeyup

const input = document.querySelector("input")

input.onkeydown = function() {
    console.log("rodei")
}



// via Js

const h1 = document.querySelector("h1")

/* 
    .addEventListener:
        2 argumentos: 
        primeiro = qual tipo do evento 
        segundo = qual função executar

        * empilha as funções, não sobescreve nenhuma, podemos adicionar quantas quisermos
*/

// evento = "click"  | função print()
h1.addEventListener("click", print)


/*
    .onclick:
        tag + .eventoqualquer = funçãoqualquer

        * só leva em consideração a última executada, ou seja, caso exista duas .onclick, a primeira será desconsiderada e a última será executada
*/
h1.onclick = print



// ARGUMENTO/OBJETO "event"

input.onkeydown = function(event) {
    console.log(event)
}

/*
    event = pega o tipo do evento e nos traz diversas funcionalidades
    
    propriedades:

        - event.code = pega o código da tecla apertada

        - event.key = pega A tecla digitada

        - event.currentTarget = pega o alvo do disparo do evento (no caso input)

        - event.currentTarget.value = valor  do input (scanf)
        
        - ...etc
*/