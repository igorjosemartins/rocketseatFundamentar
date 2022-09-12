
# Layouts e evolução

## Normal flow

A forma como os elementos `block` e `inline` ficam na página

```html
<p> Texto block com <strong>inline</strong> dentro </p>
```

a tag `p` é block e `strong` é inline

`p` irá pegar toda a linha e `strong` irá pegar somente o conteúdo da tag


## Tables

A maneira como a tag `table` recebe um display `table` fazendo com que elementos internos como
`td` `tr` possam ser usados para montar uma tabela

```html

<table>
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>

    <tr>
        <td> Hora </td>
        <td> 20:37 </td>
    </tr>
</table>
```


## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela

```html

<div style="float:left">
    esquerda
</div>

<div style="float:right">
    direita
</div>

<div style="clear:both">
    normal
</div>
```



## Flexbox

A caixa se torna flexível, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis

```html

<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```

```css

.flexbox
{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

```