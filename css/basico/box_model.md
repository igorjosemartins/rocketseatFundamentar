# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

## O que é ?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (largura x altura)    = width | height
- Conteúdo                      = content
- Bordas                        = border
- Preenchimento interno         = padding
- Espaços fora da caixa         = margin

* Cada elemento na sua página, será considerado uma caixa.


## box-sizing

Como será calculado o tamanho total da caixa ?

- content-box|border-box

border-box = organiza o preenchimento interno da caixa com base nas alturas e larguras definidas

```css
div
{
    box-sizing: border-box;
}
```



## display: block VS display: inline

- Como as caixas se comportam em relação às outras ?
- Comportamento externo das caixas

|                **block**                   |            **in line**              |
|--------------------------------------------|-------------------------------------|
| Ocupa toda a linha, colocando o próximo    |     Elemento ao lado do outro       |
| elemento abaixo desse                      |                                     |
|--------------------------------------------|-------------------------------------|
|     width e height são respeitados         |    width e height não funcionam     |
|--------------------------------------------|-------------------------------------|
| padding, margin, border irão funcionar     | Somente valores horizontais de      |
| normalmente                                | margin, padding e border            |
|--------------------------------------------|-------------------------------------|

* Exemplos:

- block: `<p> <div> <section>`, todos os headings `<h1>, <h2>`...

- inline: `<a> <strong> <span> <em>`



## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left    -----> (relógio)
- values: `<length>` | `<percentage>` | auto

```css
div
{
    /* shorthand */
    margin: 12px 16px 10px 4px; --> (top,right,bottom,left)
    margin: 12px 16px 0; --> (top, right + left, bottom)
    margin: 8px 16px; --> (top + bottom, right + left)
    margin: 8px; --> (top + right + bottom + left)
}
```

* Cuidado com margin collapse (top se ajunta ao bottom)




## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left --> (relógio)
- values: `<length>` | `<percentage>`

```css
div
{
    /* shorthand */
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}
```

* Padding poderá causar diferença na largura de um elemento




## border

São as bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`

    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: <length>
    - color: <color>

```css    
div {
	/* shorthand */
	border-top: solid 2px; /* top | right | bottom | left */

	/* style */
	border: solid;

	/* width <length> | style */
	border: 2px dotted;

	/* style | color */
	border: outset #f33;

	/* width | style | color */
	border: medium dashed green;

}
```
### E o outline?

- difere em 4 sentidos:
    - O outline é muito semelhante ao border, mas difere em 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agent para acessibilidade


* Documentação do MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/border