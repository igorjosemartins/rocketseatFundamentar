

# TIPOS DE DADOS:


## strings:
    - "" | '' | ``
    - console.log("texto")



## number: 
    - 33 | 12.5 | NaN | Infinity
    - console.log(12.5 + 39.2)



## boolean:
    - true | false
    - console.log(true)



## undefined:
    - n existe
    - console.log(undefined)



## null:
    - n possui nada
    - console.log(null)



## object:
    - propriedades/atributos | funcionalidades/métodos

        - console.log
        ({
            name: "igor",
            idade: 20,
            andar: function
            ({
                console.log("andar")
            })
        })



## array:
    - lista  | agrupamento de dado
    - console.log(["igor", 20, ...])




# Variáveis:

    - var -> var = 20 -> console.log(var)

    - let -> let = 20 -> console.log(let)

    - const -> const = 20 -> console.log(const) ** const não pode ser alterada


    typeof -> diz o tipo de dado -> console.log(typeof 20)




# Scope

    * Escopo determina a visibilidade de alguma variável no JS


# Block statement

```js
// vamos iniciar um bloco
{
    

} // fechando o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`



## var
```js

// var é global e poderá funcionar fora de um escopo de bloco


    console.log("> existe x antes do bloco?", x)
    // não

    {
        var x = 0
    }

    console.log("> existe x depois do bloco?", x)
    // sim

    =

    var = x

    console.log("> existe x antes do bloco?", x)

    {
        x = 0
    }

    console.log("> existe x depois do bloco?", x)
        
    // * hoisting (elevação)
```


## let e const
```js

// const e let são locais e só funcionam no escopo onde foi criada

console.log("> existe y antes do bloco?", y)
// não (erro de referência)

{
    let y = 0
}

console.log("> existe y depois do bloco?", y)
// não (erro de referência)

```



## Criando variáveis

    * JS é case-sensitive
    
    - Posso:
        * Iniciar com esses caracteres especiais: $, _
        * Colocar acentos
    
    - Não posso:
        * Iniciar com números
        * Colocar espaços