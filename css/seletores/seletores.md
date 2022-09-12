
# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento


## Tipos:


### Element Selector ( element{} )
    - Todos os elementos HTML

- Exemplo:

    ```html

    <h1>Título da página</h1>
    <p>Conteúdo da minha página</p>
    ```
    
    ```css

    h1 {
        color: blue;
        font-size: 60px;
    }

    p {
        color: green;
    }
    ```



### ID Selector ( #element{} )
    - Um elemento que tenha um atributo `id`
    - Cada id deverá ser único
    - Usa-se `#` para indicar um ID selector

- Exemplo:

    ```html

    <h1 id="title">Título da página</h1>
    <p id="content">Conteúdo da minha página</p>
    ```

    ```css

    #title {
    color: yellow;
    }

    #content {
        color: orange;
    }
    ```



### Class Selector ( .element{} )
    - Os elementos com atributo class
    - Podemos ter uma ou mais classes
    - Usa-se `.` para indicar um class selector
    - Todos os elementos com a mesma class são alterados

- Exemplo:

    ```html
    
    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>
    ```

    ```css

    .red {
    color: red;
    }

    .big {
        font-size: 3em;
    }
    ```



### Attribute Selector ( [element]{} ) 
    -Um elemento que tenha um atributo específico

- Exemplo:

    ```html

    <h1 title="Algum titlulo">Título da página</h1>
    <p title="Conteúdo da página">Conteúdo da minha página</p>
    ```

    ```css

    [title] {
        color: orange;
    }
    ```



### Pseudo-class Selector ( element:estadoespecifico )
    - Elementos em um estado específico

- Exemplo:

    ```html

    <h1 class="red big">Título da página</h1>
    <p class="red big">Conteúdo da minha página</p>
    ```

    ```css

    p:hover {
        color: red;
    }

    h1:hover {
        color: red;
    }
    ```



### Múltiplos ( element, element... )
    - É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todos eles.
    - Usamos uma separação por vírgulas para isso

- Exemplo:

    ```css
    
    h1, p, .title, .title:hover {
        color: red;
    }
    ```