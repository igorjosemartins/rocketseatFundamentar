
// EXERCÍCIOS


/* FUNCTION GETSCORE

    /*
        Crie um algoritmo que transforme as notas do sistema
        numérico para sistema de notas em caracteres tipo A B C

        * de 90 para cima -   A
        * entre 80 - 89   -   B
        * entre 70 - 79   -   C
        * entre 60 - 69   -   D
        * menor que 60    -   F
    /*



    function getScore(score)
    {
        let scoreA = score >= 90 && score <= 100
        let scoreB = score <= 89 && score >=80
        let scoreC = score <= 79 && score >= 70
        let scoreD = score <= 69 && score >= 60
        let scoreF = score <= 59 && score >= 0

        let scoreFinal;


        if(scoreA)
        {
            scoreFinal = "Nota A"
        }
        else if(scoreB)
        {
            scoreFinal = "Nota B"
        }
        else if(scoreC)
        {
            scoreFinal = "Nota C"
        }
        else if(scoreD)
        {
            scoreFinal = "Nota D"
        }
        else if(scoreF)
        {
            scoreFinal = "Nota F"
        }
        else
        {
            console.log("Nota inválida")
        }

        return scoreFinal
    }


    console.log(getScore(100))

*/





/* CÁLCULO SALDO FAMILIA

    /*
        Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
            * receitas: [] 
            * despesas: []
        
        Agora, crie uma função que irá calcular o total de receitas e 
        despesas e irá mostrar uma mensagem se a família está com 
        saldo positivo ou negativo, seguido do valor do saldo.
    /*



    let family =
    {
        saldo: [3500, 1500],
        despesas: [300, 250, 200, 19.99, 9.99, 600, 9000]
    }

    function sum(array)
    {
        let total = 0;

        for(let value of array)
        {
            total += value
        }
        return total
    }

    function calculoSaldoDaFamilia()
    {
        const totalSaldo = sum(family.saldo)
        const totalDespesas = sum(family.despesas)

        saldoFinal = totalSaldo - totalDespesas


        const saldoPositivo = saldoFinal >= 0

        let saldoTexto = "negativo"

        if(saldoPositivo)
        {
            saldoTexto = "positivo"
        }


        console.log(`o saldo da família é ${saldoTexto} de R$ ${saldoFinal}`)
    }



    calculoSaldoDaFamilia()
*/





/* CONVERSÃO CELSIUS -> FAHRENHEIT

    /*
        Crie uma função que receba uma string em celsius ou fahrenheit
        e faça a transformação de uma unidade para outra 
            C = (F - 32) * 5/9 
            F = C * 9/5 + 32
    /*


    function convertDegree(degree)
    {
        // vai pegar a string recebida e transformar em maiúscula e ver se tem "C" ou "F"
        const celsiusExists = degree.toUpperCase().includes("C")
        const fahrenheitExists = degree.toUpperCase().includes("F")
        


        // fluxo de erro
        if(!celsiusExists && !fahrenheitExists)
        {
            throw new Error("Grau não identificado: apenas valores em C ou F são aceitos")
        }

        // fluxo celsius
        if(celsiusExists)
        {
            // dividimos a string recebida em um array para podermos tirar o C e fazer o cálculo apenas com o número
            let array = degree.toUpperCase().split("C")

            newDegree = 0;

            newDegree = array[0] * 9/5 + 32


            console.log(`Valor em Fahrenheit: ${newDegree.toFixed(0)}F`)
        }

        // fluxo fahrenheit
        else if(fahrenheitExists)
        {
            // dividimos a string recebida em um array para podermos tirar o F e fazer o cálculo apenas com o número
            let array = degree.toUpperCase().split("F")

            newDegree = 0;

            newDegree = (array[0] - 32) * 5/9


            console.log(`Valor em Celsius: ${newDegree.toFixed(0)}C`)
        }

    }

    try
    {
        convertDegree("10c")
        convertDegree("50f")     
    } catch(error)
    {
        console.log(error)
    }
*/





/* MANIPULAÇÃO DE ARRAY

/*  
    -> Contar o número de categorias e o número de livros em cada categoria
    -> Contar o número de autores
    -> Função que mostre livros de um autor escolhido
/*


    const booksByCategory = 
    [
        {
            category: "Riqueza",
            books: 
            [
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },
            ],
        },


        {
            category: "Inteligência Emocional",
            books: 
            [
                {
                    title: "Você é Insubstituível",
                    author: "Augusto Cury",
                },
                {
                    title: "Ansiedade – Como enfrentar o mal do século",
                    author: "Augusto Cury",
                },
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    author: "Stephen R. Covey",
                },
            ],
        },
    ];


    const totalCategories = booksByCategory.length



    // Contar o número de categorias e o número de livros em cada categoria

        for(let categories of booksByCategory)
        {
            console.log("Total de livros na categoria:", categories.category)
            console.log(categories.books.length)
        }



        // Contar o número de autores

            function countAuthors()
            {
                // cria um array para por os autores dentro
                let authors = [];

                // repetição para entrar nas categorias
                for(let categories of booksByCategory)
                {
                    // repetição para entrar nos livros
                    for(let book of categories.books)
                    {
                        // aqui podemos entrar nos autores

                        // condição para não repetir o nome  do autor
                        if(authors.indexOf(book.author) == -1)
                        {
                            // joga o nome do autor para o array "authors"
                            authors.push(book.author)
                        }
                    }
                }

                console.log("Número de autores: ",authors.length)
            }

            countAuthors()



    // Mostrar livros do autor escolhido

    function booksOfAuthor(author)
    {
        let books = [];

        for(let categories of booksByCategory)
        {
            for(let book of categories.books)
            {
                if(book.author == author)
                {
                    books.push(book.title)
                }
            }
        }

        console.log(`Livros do autor ${author}:`, books)
    }

    booksOfAuthor("George S. Clason")
*/