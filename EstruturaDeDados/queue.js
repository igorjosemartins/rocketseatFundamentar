
/*
    Queue = Fila
        - Linear
        
    Conceitos:
        - FIFO: First In First Out
            - O primeiro elemento a entrar na fila é o primeiro a sair dela

        - Front: é a referência do primeiro elemento a entrar na fila

        - Back: é a referência do último elemento a entrar na fila

        - Enqueue: entrando na fila

        - Dequeue: saindo da fila


    Queue no código:

        Métodos fundamentais:
            - enqueue(): adicionar um elemento ao final da fila
            - dequeue(): remover o primeiro elemento a entrar na fila

        Outros:
            - size(): tamanho da fila
            - front(): pegar o primeiro elemento da fila
*/


// Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    // adicionando um elemento a fila
    enqueue(item) {
        // adicionando o item na fila
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        // shift() = tira o primeiro elemento a entrar na fila
        const item = this.data.shift()
        console.log(`${item} saiu da fila!` )
    }
}


// Utilização
// new instancia o objeto, "fila" será o objeto, o "this" será a referência do objeto "fila"
const fila = new Queue()

fila.enqueue("Mariana")
fila.enqueue("João")
fila.enqueue("Ariel")

fila.dequeue()
fila.dequeue()
fila.dequeue()
