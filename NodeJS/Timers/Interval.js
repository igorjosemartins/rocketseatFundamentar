// setInterval = rodar uma função N vezes depois de X milissegundos

const timeOut = 1000
const checking = () =>  console.log("checking!")

interval = setInterval(checking, timeOut)


// clearInterval = cancela um setInterval registrado

// clearInterval(interval)

// usamos o setTimeout para manipular o clearInterval, para ele só cancelar após 3s
setTimeout( () => clearInterval(interval), 3000)