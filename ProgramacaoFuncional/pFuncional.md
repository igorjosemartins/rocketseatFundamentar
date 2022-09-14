
# Objetivo

    - Apresentação do Paradigma
    - Conceitos fundamentais
    - JavaScript
        - Linguagem da WEB
        - Multiparadigma
        - Foco no entendimento do Paradigma
    

# Por que programação funcional ?
    - Organizar uma linha de raciocínio
    - Entender uma nova maneira de abordar os problemas
    - Algumas tecnologias tem como requisito


# O que é Programação Funcional
    - É um paradigma de programação, assim como Orientação a Objetos
        * Uma maneira de resolver problemas


## Funções
    - Pequenas tarefas
    - Abstrair um problema e isolar ele dentro de uma função
    - Não modificar dados fora dela
    - Pequenas e bem específicas

### Características principais
    - Um dado entra e um novo dado sai da função
    - Não altera dados
    - Não guarda estado (stateless)


## Linguagens funcionais
    - JavaScript (multiparadigma)
    - PHP (multiparadigma)
    - Elixir
    - Haskell


## Pontos positivos
    - Fácil manutenção (funções)
    - Fácil uso de testes
        - Funções isoladas e consistentes
    - Códigos mais confiáveis



# Princípios
    - Paradigmas
        - Programação Imperativa
        - Programação Declarativa

    - Dados
        - Imutabilidade
        - Stateless
    
    - Funções
        - Independentes
        - Puras
        - Higher-order
        - First-class
        - Composição


## Paradigmas
```js
    // função que eleva um número ao quadrado

    // Imperativo: Faça da seguinte forma
    let number = 2

    function square() { 
            return number * number
    }

    number = square()

    // Declarativo = o que fazer e não como fazer
    const square = n => n * n
```

### Programação Imperativa
    - Código gerado em sequência
    - passo-a-passo
    - Uma coisa depende da outra
    - O estado de um dado é alterado constantemente causando mutações nas variáveis
    - POO é um paradigma imperativo

### Programação Declarativa
    - O código é gerado para fazer algo, não importa como
    - O que fazer, e não como fazer
    - Não há necessidade de um passo a passo no código
    - Programação funcional é um paradigma declarativo


### Imutabilidade
    - Uma variável não vai variar
    - Se precisar mudar uma variável, não mude, crie outra
    
    - Exemplo:
```js
    const cart = {
        quantity = 2,
        total: 200
    }

    // bad
    cart.quantity = 3

    // good
    const newCart = {...cart, quantity: 3}

    
    // Exemplo em ReactJS
    const [amount, setAmount] = useState(0)

    // bad 
    amount = 2

    // good
    setAmount(2)
```

### Stateless
    - Não guarda estado
    - A função só conhece dados entregues a ela
    - A resposta não pode variar
    - Não pode depender de dados externos, nem guardar dados
    
    - Exemplo:
```js
    let number = 2

    // stateful function
    function square() { 
            return number * number
    }

    number = square()

    // stateless function
    const square = n => n * n
```


### Funções

#### Funções independentes
    - Deverá ter ao menos 1 argumento
    - Deverá retornar algo
    - Nada que acontecer lá dentro afeta o mundo externo
        - dados imutáveis
        - não guardar estado
    - Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)
    
    - Exemplo:
```js
    const random = (number, Math) => 
        Math.floor(Math.random() * number);

    // recursão
    // Fatorial de um número
    const factorial = x => {

        if (x === 0) {
            return 1;
        }

        // por usar loops, usaremos a recursão, (a função chama ela mesma)
        return x * factorial(x - 1);
    }
```

#### Funções puras
    - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
    - Não deverá sofrer nenhuma interferência do mundo externo a ela
    - Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
    - Não terá nenhum efeito colateral no seu código
        - Não irá modificar nenhum dado
        - Não irá guardar nenhum estado

    - Exemplo:
```js
    // Função impura

    // Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
    function calculateCircumference(radius) {
        return Math.PI * (radius + radius)
    }

    // Exemplo 2: está alterando um dado externo
    let person = {
        name: "Igor Martins"
        age: "jovem"
    }

    function changeName(name) {
        person.name = name
    }

    // Função pura

    // Exemplo 1:
    const calculateCircumference = function(pi, radius) {
        return pi * (radius + radius)
    }

    // com arrow function

    const calculateCircumference = (pi, radius) => 
        return pi * (radius + radius)

    // Exemplo 2:
    const changePersonName = (person, name) =>
        ({...person, name: })
```

#### First-class function
    - Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
    - A função poderá ser entendida como uma variável
    
    - Exemplo:
```js
    const sayMyName = () => console.log("Igor")
    const runFunction = fn => fn()

    // uma função que recebe como parâmetro outras funções, como se fosse uma variável
    runFunction(sayMyName)

    // podemos fazer arrow function dentro dela
    runFunction(() => console.log("teste"))

    // podemos usar uma função do js
    console.log(runFunction(Math.random))
``` 

#### Higher-order function
    - Funções que recebem funções como argumentos
    - Funções que poderão retornar outras funções

    - Exemplo:
```js
    // exemplo de funções que recebem funções como argumento
    const numbers = [2, 4, 8, 16]
    
    const square = n => n * n

    // .map() pega cada elemento do array e aplica uma função, no caso square
    const squaredNumber = numbers.map(square)


    // Exemplo do retorno de função
    // currying (aplicação parcial de função)
    const pause = wait => fn => setTimeout(fn, wait)

    pause(600)( () => console.log("waiting 600ms") )

    const wait200 = pause(200)
    const wait1000 = pause(1000)

    wait200( () => console.log("waiting 200ms") )
    wait1000( () => console.log("waiting 1s") )
```

#### Composição de funções
    - Um encadeamento de funções
    - Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna...

    - Exemplo:
```js
    const people = ["Rafa", "Diego", "Dani", "Rod"]
    const upperCasePeopleThatStartsWithD = people
    // para cada pessoa ele roda a função para ver se algum elemento começa com "D"
    .filter(person => person.startsWith("D"))
    // map vai rodar a função inteira, quem tiver "D" no começo vai alterar o nome todo para maiúsculo
    .map(dperson => dperson.toUpperCase())
```


# Conclusão
    - Stateless
        - Função não pode guardar nenhum estado dentro dela
    
    - Imutabilidade
        - Não pode alterar dados fora dela, só o que tem dentro

    - Função pura
        - Recebe um valor e o valor retornado deverá ser o mesmo com o que foi passado

    - Higher-orders
        - Recebe funções como parâmetro, ou retorna funções