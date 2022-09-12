* Referências
- https://www.w3.org/TR/css-fonts-3/
- https://css-tricks.com/snippets/css/using-font-face-in-css/
- https://fonts.google.com/


# Fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

## Basic Font Properties

    * font-family
    * font-weight
    * font-style
    * font-size


## Font family

    * Tipo de fonte de um elemento
    * Lista de fontes e ordem de prioridade
    * inclui *fallback* font (escape)

    ```css
    p
    {
        font-family: "Times New Roman", Times, serif;
    }
    ```

    - serif (dobras e pé nas letras)
    - sans


## Font Weight

    * Força da fonte

    ```css
    p
    {
        font-weight: bold;
    }
    ```


## Font Style

    * Estilo da fonte

    ```css
    span
    {
        font-style: italic;
    }
    ```


## Font Size

    * Tamanho da fonte

    ```css
    p
    {
        font-size: 18px;
    }
    ```


## Web Fonts

    - fontes do sistema x fontes da web
    - como usar fontes para web?

        * @font-face
        * @import
        * link



## font-variant

* variações na apresentação fonte

```css
p
{
    font-variant: small-caps;
}
```

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%

```css
p
{
    font-stretch: expanded;
}
```


## letter-spacing

* Espaços entre caracteres

```css
p
{
    letter-spacing: 4px;
}
```


## word-spacing

* Espaços entre palavras

```css
p
{
    word-spacing: 4px;
}
```


## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p
{
    line-height: 1.6;
}
```


## text-transform

* Transformação do texto

```css
p
{
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;
    text-transform: none;
}


## text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p
{
    text-decoration: underline; /* shorthand */
}
```


## text-align

* Alinhamento do texto

```css
p
{
    text-align: center;
    text-align: left;
    text-align: right;
    text-align: justify;
}
```


## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p
{
    text-shadow: 1px 1px 1px red,
                2px 2px 1px green;

/* 
sequência:
    offset-x | offset-y | blur-radius | color 
*/
}
```



## Shorthand

* font-style 
* font-variant 
* font-weight 
* font-stretch 
* font-size 
* line-height 
* font-family

```css
p
{
    /* -style | -variant | -weight | -stretch | -size | -line-height | -family*/

    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;

    /* size e line-height serão sempre separados pela "/" */
}