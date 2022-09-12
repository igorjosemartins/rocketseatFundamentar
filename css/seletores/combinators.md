
# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização



## Descendant combinator ( " " )

    * Identificado por um espaço entre os seletores
    * Busca um elemento dentro de outro

- Exemplo:

    ```html

    <body>
        <article>
            <h2>teste</h2>
        </article>
    </body>
    ```

    ```css

    body article h2
    {
        color: green;    
    }
    ```



## Child combinator ( > )

    * Identificado pelo sinal > entre dois seletores seleciona somente o elemento que é filho direto do pai
    * Elementos depois do filho direto serão desconsiderados

- Exemplo:

    ```html

    <body>
    <ul>
        <li>Item 1</li>
        <ul>
        <li>Item 2</li>
        </ul>
    </ul>
    </body>
    ```

    ```css

    /* vai pegar somente o Item 1 */
    body > ul > li {
        color: blue;
    }

    /* vai pegar todos ul q tenham li dentro do html */
    ul > li
    {
        color: green;
    }

    /* vai pegar somente o Item 2 */
    ul > ul > li
    {
        color: yellow;
    }

    /* caso as ul e li estivessem dentro de uma div, não iria funcionar, pois não haveria uma tag ul após a tag body*/
    body > ul > li
    {
        color: red;
    }
    ```



## Adjacent Sibling combinator ( + )

    * Identificado pelo sinal de `+` entre dois seletores
    * Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

- Exemplo:

    ```html

    <h1>Título</h1>

    <p>Parágrafo</p>

    <p>Outro Parágrafo</p> 

    <button>Um botão</button>
    <button>Outro botão</button>
    ```

    ```css

    /* vai deixar somente o primeiro p depois do h1 azul, pela questão da hierarquia */
    h1 + p
    {
        color: blue;
    }

    /* Exemplo real */
    /* dar um espaçamento entre botões*/
    button + button
    {
        margin-left: 32px;
    }
    ```



## General Sibling Combinator ( ~ )

    * Identificado pelo sinal `~` entre dois seletores
    * Seleciona todos os elementos irmãos

    ```css

    h1 ~ p
    {
        /* irá pegar todas as tags p que tiverem após a tag h1 e transformara em verde */
        color: green;
    }
    ```



## Utilizando combinadores

- Exemplo:
    ```html

    <ul>
        <li>Tópico 1</li>
        <li class="red">Tópico 2</li>
    </ul>

    <p class="red">Parágrafo</p>
    ```

    ```css

    /* muito específico */
    ul > li[class ="red"]
    {
        color: red;
    }

    /* uma simples classe resolve o problema e deixa o código mais eficiente */
    .red
    {
        color: red;
    }
    ```

### Dica
    * Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização
    * Muitas vezes, um simples uso de classe torna o trabalho muito mais eficiente