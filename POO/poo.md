
# POO (Orient Object Programming (OOP))

    - Paradigma de desenvolvimento
        - Maneira de pensar/resolver um problema


## Utilização no mercado
    - Maioria dos sistemas atuais
    - JS, TS, Java, Python...
    - Analistas de Sistemas
        - Levantamento de requisitos de sistema
        - Via gráficos, desenhos e textos


## Onde e quando utilizar POO
    - Linguagens
    - Aplicação Padrões de Projetos
    - Organizar seu código
    - Melhor entendimento do seu código, pensando nele como objetos
    - Reuso de código
    - Separar a complexidade do código, abstrair código e expor de maneira mais simples
    - Classificar as rotinas e trechos de código


## Conceitos
    - Entender os conceitose paradigmas, não somente os códigos
    - Boa fundamentação
    - Revisão/anotação





# Objetos
    - Propriedades e Funcionalidades
    - Estado e Comportamentos
    - Atributos e Métodos

## Abstração
    - Autenticação 
        - processo de login, se tiver um cadastro, você estará autenticado
        - id do usuário, nome do usuário, fazer o login, entrar no sistema...

    - Autorização ()
        - ja estou no sistema, estou autorizado a criar um post ?, criar outro usuário no sistema ?...





# Classes
    - Molde para os objetos
        - objetos são criados a partir de uma classe
        - podem ser feitos da mesma classe

    - Exemplo: Máquina de biscoito
        - Máquina = classe
        - Biscoitos = objetos
        - Instâncias

## Classes em JavaScript
    - Syntactical sugar = 
    - Prototype = são os objetos
        - cadeia/herança de outros objetos pai





# Encapsulamento
    - Colocar numa cápsula
        - Agrupamento de funções e variáveis em uma Classe
        - Esconder detalhes de implementação
        - Camada de segurança para os atributos e métodos
        - Todas as funções e variáveis do código, agora estão dentro de uma Classe, ou seja estamos encapsulando, escondendo os detalhes

## Encapsulamento em JavaScript:

    ```js

    // Estrutural
    let altura = 50
    let largura = 60

    function calcularArea() {
        return altura * largura
    }

    let area = calcularArea()

    // Orientado a Objetos

    class Poligono {
        constructor(altura, largura) {
            // this se refere a um objeto que criaremos mais tarde
            this.altura = altura
            this.largura = largura
        }

        // função para calcular a area
        // # se refere a "hash", significa que este método não será visível fora da Classe, ou seja não existe fora da Classe
        #calcularArea() {
            return this.altura * this.largura
        }

        // função para pegar a area
        get area() {
            return this.#calcularArea()
        }
    }

    // criar o novo objeto, já passando os parâmetros pra Classe
    let poligono = new Poligono(50, 60)

    console.log(poligono.area)
    ```





# Programação Estrutura X Orientação a Objetos

## Programação Estruturada
    - Processa a entrada e manipulação dos dados, até a saída
    - Uso de sequências, estruturas de repetições e condições
    - Uso de uma rotina maior, ou sub-rotinas
    - Não existem restrições às variáveis


## Programação Orientada a Objetos
    - Surge para trazer um cuidado ao uso estruturado
        - Não elimina por completo o uso estruturado
    - Conceitos como Objetos e Classes
    - Cuidados com variáveis e rotinas (Encapsulamento)
    - Melhor reuso de código (Herança)





# Herança
    - Pais e filhos (filho herda os atributos e métodos do pai)
    - Objetos podem herdar, ou estender, características bases
    - Uma cópia de atributos e métodos de outra classe
    - Um objeto pode estender de outro objeto que pode estender de outro objeto...
    - Fácil reutilização de código

- Exemplo:
```js
    class Veiculo {
        rodas = 4;

        mover(direcao){}
        virar(direcao){}
    }

    class Moto extends Veiculo {
        constructor {
            super() // puxa os atributos e métodos do pai
            this.rodas = 2
        }
    }
```





# Polimorfismo
    - Quando um objeto herda de outro, talvez haja a necessidade de reescrever uma 
      ou mais características (atributos e métodos) nesse novo objeto.
    - Recriaremos então um método (ou mais) da classe herdada
    - Polimorfismo significa muitas formas
    - Uma classe só que precisa criar uma sub-classe

## Polimorfismo em JavaScript:

```js
    class Atleta {
        peso;
        categoria;

        constructor(peso) {
            this.peso = peso
        }

        definirCategoria() {
            if (this.peso <= 50) {
                this.categoria = "infantil"
            }
            else if (this.peso <= 65) {
                this.categoria = "juvenil"
            }
            else {
                this.categoria = "adulto"
            }
        }
    }


    class Lutador extends Atleta {
        constructor(peso) {
            super(peso)
        }

        // temos que definir as categorias novamente pois pros lutadores os pesos e as nomenclaturas são diferentes 

        definirCategoria() {
            if (this.peso <= 54) {
                this.categoria = "leve"
            }
            else if (this.peso <= 65) {
                this.categoria = "meio-leve"
            }
            else if (this.peso <= 75) {
                this.categoria = "médio"
            }
            else {
                this.categoria = "pesado"
            }
        }
        
    }
```





# Abstração
    - Template ou Identidade de uma classe que será construída no futuro
    - Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
      a implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração

    * A classe abstrata é um molde para as classes herdeiras 

## Abstração em JavaScript
```js
    class Parafuso {    // Superclasse - Abstrata
        constructor() {
            // vai verificar se os próximos construtores forem "Parafuso", se forem emite um erro
            if (this.constructor === Parafuso)
            throw new Error("Classe abstrata não pode ser instânciada")
        }

        // criar um método tipo que também não podemos usar
        get tipo() {
            throw new Error("Método "get tipo()" precisa ser implementado")
        }
    }

    class Fenda extends Parafuso {
        // construtor irá herdar os métodos
        constructor() { super() }

        // agora implementamos o método tipo
        get tipo() {
            return "fenda"
        }
    }

    class Philips extends Parafuso {
        constructor() { super() }

        get tipo() {
            return "philips"
        }
    }

    // classe exemplo
    class Allen extends Parafuso {}


    // criar e usar
    new Parafuso()  // não podemos utilizar ("Erro")
    let fenda = new Fenda()
    let philips = new Philips()
    let allen = new Allen()

    console.log(fenda.tipo, philips.tipo)
    console.log(allen.tipo)    // método get tipo() precisa ser implementado
```





# CONCLUSÃO
    - Orientação a Objetos
        - Introdução
            - Paradigma (maneira de se interpretar um problema e colocá-lo em código)
        
        - Objetos
            - Atributos e Métodos

        - Classes
            - Para criar objetos precisamos de uma Classe
        
        - Princípios
            - Encapsulamento (Esconder/bloquear detalhes de implementação de código)

            - Herança (Herdar atributos e métodos de outras Classes)

            - Polimorfismo (Herda atributos e métodos e os altera)
            
            - Abstração (Superclasse que explica como as outras Classes serão criadas através dela)