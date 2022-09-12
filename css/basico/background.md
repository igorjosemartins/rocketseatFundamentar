
# Background

```css

/* background-color */

background-color: green;
background-color: #0066699;
background-color: rgb(55, 100, 50);
background-color: rgba(55, 100, 50, 0.85);
background-color: hsl(200,50%,30%);



/* background-image */

background-image: "Link";



/* background-repeat = modificar a opção de repetição */

background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podemos usar 2 valores: horizontal | vertical */

background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;



/* background-position = modificar a posição da imagem */

background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;



/* background-size = modificar o tamanho da imagem */

/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura e o segundo é para a altura */

background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;



/* background-origin = modificar a origem da imagem */

background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;



/* O background-clip = modificar o começo da imagem */

background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;



/* background-attachment = determina se a imagem de fundo vai ser fixa ou rola junto com o conteúdo da página */

background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;



/* 
gradient = degradê 

linear-gradient = reto/linear
radial-gradient = circular/radial
*/

background: linear-gradient(yellow, red) 

background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))

```

* Podemos usar o shorthand background para definir todos os valores do background

* Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.