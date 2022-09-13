
// array para as perguntas
const questions = [
    "O que aprendi hoje ?",
    "O que me deixou aborrecido ? E o que eu poderia fazer para melhorar ?",
    "O que me deixou feliz hoje ?",
    "Quantas pessoas eu ajudei hoje ?",
]

// função para rodar as perguntas
const ask = ( index = 0 ) => { "\n\n" + process.stdout.write(questions[index] + ">") }

ask()

// array para as respostas
const answers = []

// quando houver dados ele irá fazer:
process.stdin.on("data", data => { 

    // trim() = remove os espaços em branco (whitespaces) do início e/ou fim de um texto
    // vai colocar as respostas no array answers
    answers.push(data.toString().trim())

    // condição para que rode todas as perguntas
    if (answers.length < questions.length) {
        // adiciona +1 no index das questions para continuar o loop
        ask(answers.length)
    } else {
        // termina o programa
        process.exit()
    }
})


// quando houver um exit() ele irá fazer:
process.on('exit', () => {
    console.log(`
    Ok Igor
    
    O que você aprendeu hoje: 
    ${answers[0]}
    
    O que você pode melhorar: 
    ${answers[1]}
    
    O que te deixou feliz hoje: 
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje
    `)
})