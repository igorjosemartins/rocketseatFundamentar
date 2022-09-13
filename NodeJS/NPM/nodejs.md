
# Nodejs

- Back-end
- Front-end
- Micro-serviços

- API { WebApp, Mobile, Desktop}
- Scripts e automação
- Machine learning
- I.A


## Vantagens

- Rápido { Execução, Prototipar}
- Alta escalabilidade   
- Aplicações de ponta
- JS 
- Ecosistema gigante
- Casos de uso { Netflix, Paypal, https://www.simform.com/nodejs-use-case/}


## O que é ?

- JS Runtime Enviroment
    - Runtime Enviroment = mini S.O, ambiente completamente dele para executar JS e troca informações com o S.O que troca info com o hardware
    - Possui diversos módulos
    - Não é um Framework como (React, View, Anglar, etc..) = conjunto de regras aplicados/estratégias já aplicados em uma plataforma
    - Não é uma linguagem


## V8 (Google)

- Interpretador de JS para linguagem de máquina
- Criado em C++
- Baseado nas últimas features do JS
- Focado para o Chrome mas tem todo cuidado de não quebrar o Node
- Não possui a DOM, console, ou File System



## Como funciona o Node

Event Loop {
    - Usuário -> Request -> Thread
    - Thread -> Servidor -> Banco de Dados -> Usuário
}

- Node é single-threaded, non-blocking e asynchronous
- Apenas uma thread, que não é bloqueada, que faz mais de uma ação

- https://github.com/nodejs/node


### REPL

- Read-Eval-Print-Loop
- Escrever js em um ambiente node no terminal
- Para entrar digite node no terminal