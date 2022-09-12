

const button = document.querySelector("button")

const div = document.querySelector("div")


// clicar no botão e remover o "invisible"

function remove() {
    div.classList.remove("invisible")
}

button.addEventListener("click", remove)



// teclar esc para voltar ao "invisible"

document.addEventListener("keydown", function(event) {
    
    const isEsc = event.key === "Escape"

    const hasInvisible = div.classList.contains("invisible")

    if(hasInvisible == false) {
        if(isEsc) {
            div.classList.add("invisible")
        }
    }
})
