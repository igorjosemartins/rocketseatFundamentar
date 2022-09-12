
/* 
    Stack = Pilha
        - É linear, um após o outro

        Conceito:
            - LIFO: Last In First Out
                - o último elemento a entrar na pilha, é o primeiro a sair


    Stack no Código:

        Métodos fundamentais:
            - push(): adicionar um elemento à pilha
            - pop(): remover o elemento do topo da pilha
            - peek(): obter o elemento do topo da pilha

        Outros:
            - size(): mostrar o tamanho da pilha
*/


// Modelagem
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    // adicionar um valor a pilha
    push(value) {
        // this.top = 0
        this.top++
        // posição 0 irá receber o valor
        this.data[this.top] = value
        // retorna toda a estrutura da pilha
        return this.data
    }

    // retirar o último elemento colocado na pilha
    pop() {
        // se o topo for menor que 0, significa que não tem elementos, então retornamos undefined
        if (this.top < 0) return undefined
        // pega o último elemento
        const poppedTop = this.data[this.top]
        // deleta o último elemento
        delete this.data[this.top]
        // decrementa o top para dizermos que temos um elemento a menos
        this.top--
        // retorna o elemento que foi retirado (pode ser útil)
        return poppedTop
    }

    peek() {
        // se o topo for maior igual a 0, então retorna o último elemento da pilha, senão "undefined" pois não existe
        // "?" = então | ":" = senão
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}


// Utilização
// new = instancia o objeto, agora "stack" se torna um objeto, portanto podemos acessar a funcionalidades e propriedades
const stack = new Stack()

// adicionar dados
stack.push("learning")
stack.push("data")
console.log(stack.push("structures"))

// ver o elemento topo da pilha
console.log(stack.peek())


// remover dados
// remove o structure
stack.pop()
// remove o data, portanto só sobra o learning
console.log(stack.pop())

console.log(stack.data)