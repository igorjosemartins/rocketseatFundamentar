# Git

## Controle de Versão

[X] Registro de alterações em um ou mais arquivos
[X] Lembrar versões específicas mais tarde
[X] Reverter para estado anterior determinados arquivos ou um projeto inteiro
[X] Compare as mudanças ao longo do tempo
[X] Veja quem modificou pela última vez algo que pode estar causando um problema
[X] Quem introduziu um problema ou quando
[X] Se você estragar tudo ou perder arquivos, você pode facilmente recuperar

- VCS - Version Control System

### Sistemas Locais

[X] Copia os arquivos para outro diretório
[X] Muito comum/simples
[X] Muito propenso a erros
[X] Fácil de sobreescrever arquivos, caso haja uma cópia errada

### Sistemas Centralizados

[X] Um único servidor que contém todos os arquivos de controle de versão
[X] Vários clientes usam arquivos a partir desse lugar central

    * Vantagens
        - Controle sobre atividades dos colaboradores no projeto
        - Administradores têm controle refinado sobre quem pode fazer o que
        - Mais fácil de administrar um CVCS do que lidar com um banco de dados locais em cada cliente

    * Desvantagens
        - Se esse servidor der problema por uma hora, durante essa hora ninguém consegue colaborar ou salvar
          as alterações de versão
        - Se o disco rígido do BD central for corrompido, você perde absolutamente tudo


### Sistemas Distribuídos

[X] Duplica (clona) localmente o repositório completo
[X] Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele,
qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor

[X] Cada clone é de fato um backup completo de todos os dados
[X] Clientes usam o estado mais recente dos arquivos

## O que é o Git ?

[X] Sistema de controle de versão distribuído
[X] Open-source
[X] Pontos na história: commit (viagem no tempo)
[X] Histórico de alterações no código
[X] Voltar para qualquer ponto na história

[X] Controlar o fluxo de novas funcionalidades
[X] Ramificações: branch (universos paralelos)
[X] Vários devs no mesmo projeto
[X] Análise e resolução de conflitos

### Configuração Inicial

    - Sua identidade:
        - git config --global user.name "Nome Completo"
        - git config --global user.email "email@dominio.com"

    - Ver configurações:
        - git config --list

### git config

[X] Permite ver e atribuir variáveis de configuração como nome e email

[X] Estas variáveis podem ser armazenadas em três lugares diferentes: 1. `/etc/gitconfig`: válido para todos os usuários no sistemae todos os seus
repositórios. Se você passar a opção `--system` para `git config`, ele lê
e escreve neste arquivo 2. `~/.gitconfig` ou `~/.config/git/config`: Somente para o seu usuário. Você
pode fazer o Git ler e escrever neste arquivo passando a opção `--global` 3. `config` no diretório Git (ou seja, `.git/config`) de qualquer repositório
que você esteja usando: específico para este repositório

- Cada nível sobrescreve os valores no nível anterior, ou seja, valores em `.git/config` prevalecem sobre `/etc/gitconfig`

- No Windows, o arquivo .gitconfig estará no diretório $HOME que é C:/Users/$USER

- git help

## Criando um repositório

    - git init = iniciar um repositório Git (invisível)

    - git add "nomeArquivo" = adiciona o arquivo no repositório (. = todos os arquivos do diretorio local)

    - git commit -m "mensagem" = snapshot do arquivo (marcando um ponto na história)

    - git log = rastreamento/histórico de commits
        - git log --oneline (curto, menos detalhado)
        - git log -n 5 (últimos 5 commits)
        - git log --since=2020-10-01 (commits desde a data)
        - git log --until=2020-10-01 (commits anterior a data)
        - git log --author=Igor (commit de um autor)
        - git log --grep="init" (achar commits pela mensagem do commit)

}

## Fluxo do Git

    - init/clone -> Working Directory -- add --> Stage Area -- commit --> Local Repository
                    |   Modified   |           |  Staged  |              |   Commited   |


    * Working Directory
        - todos os nossos arquivos
        - Working tree

    * Stage Area
        - Preparação dos nossos arquivos, para serem commitados
        - Index
        - Stage tree

    * Repository

## Hash Values (SHA-1)

    checksum - converte dados em numero

    - É pelo hash que conseguimos ver as alterações dos arquivos, sendo cada snapshot
      uma "foto" do nosso arquivo quando commitamos

    Snapshot A {
        Hash: 6fd78a0cf

        parent: null
        author: Igor
        message: initial commit
    }

    Snapshot B {
        Hash: 8d9e0a9f4

        parent: 6fd78a0cf (Snapshot A)
        author: Igor
        message: second commit
    }

    Snapshot C {
        Hash: 56dec34a2

        parent: 8d9e0a9f4 (Snapshot B)
        author: Igor
        message: third commit
    }

## HEAD

    - um ponteiro, aponta em que ponto da história nos estamos com base no Hash

### Comandos

    - Introdução
        - git add
            - git add "arquivo"
            - git add */. (todos)
            - git add *.md (todos os arquivos .md)

        - git commit -m "" | (manda os arquivos da Stage Area para o próprio repositório (cria um ponto na historia))

        - git commit -am "" | (pula a etapa "add", commita o arquivo direto da working directory pro repositório)
            - (só funciona quando o arquivo já está rastreado pelo git)



    - Ver mudanças
        - git diff | (mostra modificações dos arquivos no Working Directory em comparação com o que tinha no repositório)

        - git diff --colors-word | (mostra as linhas que foram alteradas)

        - git diff --staged [cached] | (mostra modificações dos arquivos na Stage Area em comparação com o que tinha no repositório)

        - git show (Hash) | (mostra o que foi feito naquele commit)
            - git show (Hash) -- src/views/* | (mostra detalhes específicos dentro do arquivo que já estão no repositório)

        - git remote show origin | (mostra qual repositório está linkado)



    - Remoção
        - git rm <arquivo.ex> | (remove um arquivo)

        - git rm -r --cached | (remove TODOS os arquivos que estavam sendo rastreados pelo Git)

        - git restore <arquivo.ex> | (desfazer modificações)

        - git clean -n (para mostrar o que ele irá fazer) , git clean -f (para executar) | (removendo arquivos não rastreados)

        - git remote rm origin | (remove o repositório linkado)



    - Alteração

        - git mv <arquivo.ex> <novoNome.ex> | (renomeia um arquivo)

        - git mv <arquivo.ex> pasta/<arquivo.ex> | (mover arquivos)

        - git restore --staged <arquivo> | (restora um arquivo da Stage Area)

        - git commit --amend -m "" | (corrige/altera o último commit) (a Hash é alterada)

        - git checkout (Hash)edcdf19 -- <arquivo.ex> | (recuperando arquivos)

        - git revert HEAD~5 (~ = -, HEAD-1 seria um commit antes da HEAD...) (precisa do working directory limpo)  | (revertendo um commit)
            - git revert edcdf19 (hash) | (também reverte)




    - .gitignore
        - é um arquivo que escrevemos quais arquivos devem ser ignorados pelo Git, para facilitar a manipulação por Git

        - para criar:
            - vim .gitignore
                - .<nomeArquivo>
            - git add .gitignore
            - git commit -m "add .gitignore"



    - vim
        - editor de arquivos no terminal

        - comandos:
            - i (para começar a inserir dados)
            - esc (para de inserir)
                - wq (write and quit)
                - q (quit)
                - q! (quit e não salva mudanças)




# GitHub

## SSH Key

    - conexão entre a máquina e o servidor do GitHub
        - para que eu identifique que a minha máquina tenha autorização a usar o GitHub
    - fazer com cada máquina

### Configuração (Windows)

    - Criação da chave via git bash
        - ssh-keygen -t rsa -b 4096 -C "email@email.com"
            - ssh-keygen = gerador de chaves
            - -t rsa = tipo de encriptação
            - -b 4096 = força da encriptação
            - -C "email@email.com" = email de criação

    - Configuração da chave
        - eval `ssh-agent-s`    (inicialização da chave)
        - ssh-add ~/.ssh/id_rsa (adicionar a identidade na chave)

    - Referência
        * https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key

### Linkando repositório local com remoto

    - após o commit
        - git remote add origin git@github.com:igorjosemartins1/demo.git    (adiciona um repositório local no remoto)
        - git branch -M main    (transformando a branch master (padrão) para main)
        - git push -u origin main   (enviando o repositório para -u) (-u = para que local da nuvem estou enviando)
        - "yes" para conectar a chave ssh com o github

## Repositórios

### Modificando arquivos local e enviando pro remoto

    - se estiver na branch main, após o commit:
        - git push

### Modificando arquivos remoto e enviando pro local

    - se estiver na branch main, após o commit no GitHub:
        - git pull

### Histórico de commits (GitHub)

    - mostra todos os "pontos na história"
    - revisão de códigos passados
    - o que e quando foi feito

### Conflitos de merge

    - Caso eu faça dupla alteração em um mesmo arquivo remoto e localmente, exemplo:
        - alteração do arquivo no GitHub, não faço git pull, altero o mesmo arquivo na minha máquina local

    - Resolução
        - abrir o arquivo em questão no VSCode, automaticamente ele dará as opções para resolver o problema

## Features

### Pesquisa no GitHub

    - pesquisa de qualquer código, por usuário, todo o github, etc...

### Estrelas/Fork e git clone

    - Fork = tráz um repositório remoto (github) => só faz sentido se estamos contribuindo pro projeto, se não use estrela

    - git clone "link do projeto" = tráz um repositório para o repositório local

    - estrelas = favoritar
