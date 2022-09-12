
# Introdução --> codepen.io


## O que significa CSS ?

* Cascading Style Sheet
* Código para criar estilos no HTML
* É uma linguagem style sheet



# Comentários

* Começa com `/*` e termina com `*/`



# Anatomia

```css

h1 {
    color: blue;
    font-size: 60px;
    background: gray;
}
```

* Selector --> h1...
* Declaration --> tudo que está dentro das chaves "{}"
* Properties --> color, font-size, background...
* Property Value --> blue, 60px, gray...



# Selectors

Conecta um elemento HTML com o CSS

## Tipos

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros



# Adicionando CSS

## inline

* atributo `style`

## <style>

* tag html que irá conter o css

## <link>

* arquivo css externo

## @import

* arquivo css externo



# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento

* Seu estilo é lido de cima para baixo (cascata)

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

|<h1 style="color: green">| > |<style>h1{color: green;}</style>| >  <link rel="stylesheet" href="style.css">

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector,combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio]) --> class="teste" = .teste
100. ID selector --> id="teste" = #teste
1000. Inline

### A regra !important

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata



# At-rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

- @import           /* incluir um CSS externo */

- @media            /* regras condicionais para dispositivos */

- @font-face        /* fontes externas */

- @keyframes        /* Animation */

```css

@import url("http://local.com/style.css");

@media (min-width: 500px) {
    /* rules here */
}

@font-face {
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}

```



# Shorthand

* junção de propriedades
* resumido
* legível

```css
{

    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;


    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */
    font: italic bold .8em/1.2 Arial, sans-serif;
}
```

## Detalhes

* não irá considerar propriedades anteriores (sobescreve)
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes pode dar erro

## Propriedades que aceitam Shorthand

https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties



# Funções

* nome seguido de abre e fecha parênteses
* recebe argumentos

## Exemplos

```css
@import url("https://urlaqui.com/style.css");

{
    color: rgb(255, 0, 110);
    width: calc(100% - 10px);
}
```



# Vendor Prefixes

Permite que browsers adicione `features` a fim de colocar em uso alguma novidade que vemos no CSS

# Exemplo

```css
p
{
    -webkit-background-clip: text;      /* Chrome, Safari, iOS e Android */
    -moz-background-clip: text;      /* Mozilla (Firefox) */
    -ms-background-clip: text;      /* Internet Explorer (Edge) */
    -o-background-clip: text;      /* Opera */
}
```

# Consultas

http://ireade.github.io/which-vendor-prefix
http://caniuse.com