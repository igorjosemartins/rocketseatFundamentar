
# Terminologia

    - Flex Container
        - Flex item

    - Nesting (elemento que contém outros elementos)

    - Axis (eixo)
        - main (principal)
            - start, end
        - cross (cruzado)
            - start, end

    - Flex sizing
        - flexível
        - altera width/height dos itens para preenchimento dos espaços do flex container



## Propriedades do Flex Container

    * Direção dos itens
    * Multi linhas
    * Alinhamento
        * Principal
        * Cruzado
    * Espaços entre os itens


### Direção dos itens

- Flex é uma dimensão (horizontal / vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)



### flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container

```css 
flex-wrap: wrap; 
flex-wrap: wrap-reverse; 
```



### flex-flow

- Shorthand = maneira curta de escrever mais de uma propriedade com uma única propriedade
- junta flex-direction com flex-wrap

- Ex: 
```css

.box
{
    display: flex;
    flex-flow: column wrap;
}
```



### justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

#### valores

    - flex-start
    - flex-end
    - center
    - space-around
    - space-between
    - space-evenly



### align-items

- Alinhamento dos elementos no eixo cruzado

#### valores

    - stretch
    - flex-start
    - flex-end
    - center



### gap

- Espaços entre os elementos 

#### valores

    - Unidades de medidas
    - Fixas: px , pt
    - Flexíveis: %, em, rem





# Propriedades para os itens

    - flex-basis (largura e altura)

    - flex-grow (crescimento/adaptação dos itens dentro de uma box em relação aos espaços vazios)
    
    - flex-shrink (encolhimento do item dentro de uma box)
    
    - flex (shorthand pras outras propriedades flex) -> 1 = grow | 2 = shrink | 3 = basis
    
    - order (ordena os itens de uma box, funciona como maneira visual, NÃO estrutural)