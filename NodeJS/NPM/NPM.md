
# NPM

Node Packager Manager

__Glossary: Dependencies, Packages, Modules__

- [X] Verificar se temos o npm instalado `npm-v`

- [X] Criar nosso próprio pacote             
    -> (npm init (-y para setar td como yes))

- [X] O que é o arquivo package.json         
    -> json = java script object notation

- [X] Utilizar módulos de terceiros          
    -> npm install (i) moduloQualquer | -D (opção de instalação, essa depencia é somente de desenvolvimento) | update

- [X] O que é o diretório node_modules       
    -> pasta dos módulos instalados com suas dependências, etc | NÃO enviar p repositório, pois depois que vc pega as dependências não precisa ter o node_modules, apenas dar um `npm install` que vem tudo | git.ignore = node_modules/ | podemos deletar

- [X] O que é o arquivo package-lock.json
    -> arquivo json q faz o mapeamento de todas as dependências do seu projeto | não é interessante deletar

- [X] Criar scripts para rodar com o npm
    -> `npm run "script"` | `npm start` -> somente o start funciona sem o "run"

- [X] Instalar pacote de maneira global
    -> `-g` -> (`npm i -g`) | root para saber o caminho (`npm root -g`)

- [X] Desinstalar pacotes
    -> `uninstall` -> (`npm uninstall opn -g`)

- [X] Mudar versão de pacotes (Ex:)
    -> `npm i moment` (instalando) 

    -> `"moment": "^2.29.1"` 
        -> `^` = vai atualizar as duas últimas | `~` = atualizará só o patch | sem nada = manter a versão | `*` = mudar todas as versões

    -> major.minor.patch | patch = resolvendo bugs | minor = alterações maiores | major = versão do projeto

    -> `npm i moment@1.5.1` (instalando uma versão mais antiga)

    -> `npm outdated` (mostra qual a versão q está usando, a mais desejada, a última)

    -> `npm upgrade` (atualiza pra versão mais desejada)

    -> `npm moment@latest` (atualiza pra última versão)