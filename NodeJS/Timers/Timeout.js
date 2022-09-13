
// setTimeOut = rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log("done!")

timer = setTimeout(finished, timeOut)


// clearTimeout = cancela um timeOut

clearTimeout(timer)