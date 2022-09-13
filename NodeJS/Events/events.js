
// BASICO EVENTS

/* 
    // módulo de eventos já faz parte do core do js
    const events = require("events")

    console.log(events)

    // para usarmos o disparador de eventos vamos usar a função EventEmitter
    const { EventEmitter } = require("events")

    // criar um novo EventEmitter
    const ev = new EventEmitter()

    // precisamos ouvir o evento, e dar o segundo argumento para darmos uma ação ao evento
    // também podemos passar um parâmetro na função, como uma mensagem
    ev.on("say something", (message) => {
        console.log("eu ouvi você", message)
    })

    // ev.once = podemos usar para ouvir uma única vez, ignora os outros alertas "ev" se existirem

    // para emitirmos um evento
    ev.emit("say something", "mensagem")
*/




// HERDANDO O EventEmitter

const { inherits } = require("util")
const { EventEmitter } = require("events")

function Character(name) {
    this.name = name
}

// inherits irá herdar a função Character e as ações do EventEmitter
inherits(Character, EventEmitter)

const teste = new Character("Nome qualquer")

teste.on("help", () => console.log(`Testando o ${teste.name}...`))

console.log("tem que aparecer antes")
teste.emit("help")