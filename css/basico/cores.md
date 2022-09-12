# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (caixas)
* color (textos)
* border-color (caixas)
* outros...

## Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#089)
* funções: rgb, rgba, hsl, hsla

```css
element
{
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F */
    color: #090; /* RED GREEN BLUE */
    color: #009900; /* r/r + g/g + b/b */
    color: #090a; /* r + g + b + transparência */
    color: #009900aa; /* r/r + g/g + b/b + t/t */

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.6); /* 0-255 */
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 64 / 0.3);
    color: rgb(34.0 12 64 / 60%);
    color: rgba(34.6 12 64 / 30%);

    /* <hsl()> values */
    color: hsl(30, 100%, 50%, 0.6); /* Hue (cor) - Saturation (força) - Luminance (branco ou preto) */
    color: hsla(30, 100%, 50%, 0.6);
    color: hsl(30, 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30.0 100% 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit; (herança)
    color: initial; (cor padrão)
    color: unset; (não define cor)
}
``` 

## Referência

- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
- https://convertacolor.com