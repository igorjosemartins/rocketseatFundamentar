
# HTTP
    - HyperText Transfer Protocol
    - troca de informações/dados entre cliente e servidor



## Conceitos

    - Cliente/Servidor {

        - Requisição/Resposta
    }

    - Stateless {

        - Não guarda informações
        
        - Não existe relação entre conexões

        - Sessões => { Cookies, Storages }
    }

    - Extensível {
        
        - Através do cabeçalho, podemos fazer diversas trocas de informações entre o cliente-servidor, 
          conforme a necessidade

        - Headers => Informações para comunicação

        - Body => Corpo do pedido ou da resposta
    }


### Cliente

    - Quem é o cliente ? {

        - User Agent => {Browser, cURL}

        - Entidade que dá início à comunicação
    }

    - Pedidos {

        - Ações do Cliente {

            - GET

            - POST

            - PUT

            - DELETE
        }
    }


### Servidor
    
    - Se apresenta como uma máquina

    - Preparando para ouvir e processar

    - Vários servidores em um computador

    - Resposta {

        - Status Code => {404, 500}
        
        - Headers

        - Body
    }


### Proxies
    
    - Representantes

    - Fica entre o cliente e o servidor

    - Ajudam a fazer o transporte dos dados

    - Diversas funções {

        - Cache (arquivo temporário de depósito de informações)

        - Filtro (antivírus, controle parental)

        - Load balancing (distribuição da carga)

        - Autenticação

        - Autorização
    }





## Comunicação
    - Browser -- request --> Servidor
    
    - Browser <-- response -- Servidor


- Message {

    - Pedido (request) {
        
        - Methods {

            - Definição do tipo do pedido

            - Qual ação eu quero fazer no servidor

            - Exemplo {

                - GET = pegar um "recurso" 
                
                * Recurso {

                    local que irei enviar o pedido

                    - usarei uma URL para acessar o recurso

                    - Exemplo {

                        - https://google.com/

                        - http://localhost:3000/posts?q=oracle
                    }

                - POST = criar um "recurso"
            }
        }

        - Headers

        - Body
    }

    - Resposta (response) {

        - Status Code {

            - Resposta do servidor sobre o estado do pedido/resposta

            - Exemplo {

                - 200 = ok

                - 301 = redirecionamento

                - 404 = não foi encontrado

                - 500 = erro interno do servidor
            }
        }

        - Headers

        - Body
    }

    - Request/Response { 

        - Headers {

            - Campos informativos

            - Propriedade: Valor (name:value, key:value, property:value)

            - Exemplo {

                - Content-Type: application/json

                - User-Agent: Chrome

                - Request URL:www.google.com
            }
        }

        - Body {

            - HTML
            
            - Conteúdo

            - JSON
        }
    }
}





## cURL
    - curl "link"

    - curl -v "link" (request (todos) headers)

    - curl -i "link" (response headers + body)

    - curl -I "link" (response headers)





## Como chegar até um endereço/local na internet

    - URI {

        - Conceito {

            - Uniform Resource Identifier {

                - Identificar um recurso

                - Nome ou localização

                - Exemplo => { Você é um recurso; Seu nome; Seu endereço }
            }
        }

        - Recurso {

            - O alvo do pedido

            - Qualquer coisa identificável / Entidade {

                - Digital = email { mailto:email@dominio.com }

                - Abstrata => { Sessão, Autenticação } 

                - Física => { Produtos, Usuários }

                - Se podemos identificar, nomear, endereçar ou manipular, estamos
                  falando de um recurso
            }
        }

        - Locator {

            - URL {

                - Uniform Resource Locator

                - Componentes {

                    - Obrigatórios { 
                        
                        - Protocolo (https, http, mailto...) 
                        
                        - Domínio (nome, ip)
                    }

                    - Opcionais (irão fazer diferença para encontrar um recurso) {

                        - Subdomínio (www.)
                        
                        - Path (/blog)

                        - Parâmetros ((?v=...) = (?chave = valor))

                        - Porta (local dentro de um servidor)

                        - Âncora (local dentro do documento)
                    }
                }

                - Exemplos {

                    - https://www.rocketseat.com.br/blog

                    - https://www.youtube.com/watch?v-=vpYct2npKD8

                    - http://127.0.0.1:3333/index.html#algumlugar
                }
            }
        }

        - Name {

            - URN {

                - Uniform Resource Name

                - Exemplos {

                    - urn:isbn:0451450523

                    - urn:oasis:names:specification:docbook:dtd:xml:4.1.2
                }
            }
        }
    }





## HTTP Messages

    - Mensagens

    - HTTP/1.1 = Legível, Texto

    - HTTP/2 {

        - Estrutura binária

        - Otimizações

        - Mesma maneira que a versão 1.1 (mascarada)
    }

### Request

    - Request Line {

        - Method (verbo http)

        - Protocol version

        - URI
    }

    - Body

    - Headers

### Response

    - Protocol Version

    - Status Code

    - Headers

    - Status message





## Methods

    - HTTP Methods {

        - Define um conjunto de métodos HTTP

        - Indica a ação que o cliente deseja operar

        - Podem ser chamados de Verbos HTTP
        
        - Cada um possui a sua semântica

        - Características {

            - Seguros {

                - Não altera o estado do servidor

                - Somente leitura

                - Cliente não solicita alterações

                - Não há carga extra para o servidor

                - O servidor é responsável em manter o método seguro

                - Quais são ? {
                    
                    - GET => GET /search.html HTTP/1.1

                    - HEAD

                    - OPTIONS
                }
            }

            - Idempotente {

                - Ao executar o método, a resposta deverá ser sempre a mesma

                - Status Code poderá ser diferente

                - O servidor tem a responsabilidade de retornar dados da mesma maneira

                - Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente

                - Quais são ? {

                    - Todos os seguros são idempotentes

                    - PUT (altera)

                    - DELETE (deleta)
                }
            }
        }
    }


### JSON Server

    - github.com/typicode/json-server
        - npm install -g json-server (precisa do Node)

        - criar arquivo db.json
            - {
                "posts": [
                    { "id": 1, "title": "json-server", "author": "typicode" }
                ],
                "comments": [
                    { "id": 1, "body": "some comment", "postId": 1 }
                ],
                "profile": { "name": "typicode" }
            }

        - json-server --watch db.json
    

### OPTIONS

    - Informação sobre disponibilidade de métodos da requisição {

        - OPTIONS /index.html HTTP/1.1

        - OPTIONS * HTTP/1.1
    }

    - Características {

        - Seguro: SIM

        - Idempotente: SIM

        - Body {

            - Request: NÃO

            - Response: NÃO
        }

        - Uso em formulários HTML: NÃO

        - Cacheable: NÃO
    }

    - curl -X OPTIONS http://localhost:3000/posts -i    (-X diz qual método HTTP usaremos)


### GET

    - Pegar um recurso

    - Somente recebe dados

    - Características {

        - Seguro: SIM

        - Idempotente: SIM

        - Body {

            - Request: NÃO

            - Response: SIM
        }

        - Uso em formulários HTML: SIM

        - Cacheable: SIM
    }

    - curl -v http://localhost:3000/posts

    - curl http://localhost:3000/posts\?q\=json


### HEAD

    - Semelhante ao GET, porém...

    - ...recebemos somente o cabeçalho => HEAD /posts

    - Características {

        - Seguro: SIM

        - Idempotente: SIM

        - Body {

            - Request: NÃO

            - Response: NÃO
        }

        - Uso em formulários HTML: NÃO

        - Cacheable: SIM
    }

    - curl -I http://localhost:3000/posts


### POST

    - Publicar/Cadastrar um Recurso

    - Características {

        - Seguro: NÃO

        - Idempotente: NÃO

        - Body {

            - Request

            - Response
        }

        - Uso em formulários HTML: SIM

        - Cacheable: Poderá ser
    }

    - curl -d '{}' -H 'Content-type: application/json' -X POST http://localhost:3000/posts (-d = data + '{}' = pedido | -H = header)


### PUT

    - Cria um novo ou *Atualiza* um Recurso {

        - PUT /profile HTTP/1.1

        - Diferença entre POST ? (Idempotente = não faz alteração na resposta)

        - Criação => Status Code 201

        - Atualização => Status Code 204 ou 200
    }

    - Características {

        - Seguro: NÃO

        - Idempotente: SIM

        - Body {

            - Request: SIM

            - Response: NÃO
        }

        - Uso em formulários HTML: NÃO

        - Cacheable: NÃO
    }

    - curl -d '{"name": "igor"}' -H 'Content-type: application/json' -X PUT http://localhost:3000/profile


### PATCH

    - Modificação parcial de um Recurso {

        - Diferença entre o PUT ? (PUT = alteração de todos os Recursos | PATCH = um detalhe do Recurso)
        
        - PATCH /posts/1 HTTP/1.1
    }

    - Características {

        - Seguro: NÃO

        - Idempotente: NÃO

        - Body {

            - Request: SIM

            - Response: SIM
        }

        - Uso em formulários HTML: NÃO

        - Cacheable: NÃO
    }

    - curl -d '{"title": "my-title"}' -H 'Content-type: application/json' -X PATCH http://localhost:3000/posts/1


### DELETE

    - Remover um Recurso {

        - DELETE /posts HTTP/1.1

        - Status Code {

            - 202:Accepted

            - 204:No content

            - 200:OK
        }
    }

    - Características {

        - Seguro: NÃO

        - Idempotente: SIM

        - Body {

            - Request: POSSIBILIDADE

            - Response: POSSIBILIDADE
        }

        - Uso em formulários HTML: NÃO

        - Cacheable: NÃO
    }

    - curl -X DELETE http://localhost:3000/posts/2 (1/2/3...)





## Headers

    - Cabeçalhos

    - Informações adicionais para o pedido ou resposta

    - Nome: value {

        - Content-type: application/json

        - Content-type: text/html
    }


### Headers por Contextos

    - General {

        - Request URL = (url pesquisada)

        - Request Method = (método pesquisado)

        - Status Code = (resposta do servidor)

        - Remote Address = (endereço físico)

        - Referrer Policy = (política de redirecionamento)
    }

    - Request headers {

        - :authority: = (quem é a autoridade do pedido)

        - :method: = (qual método foi utilizado)

        - :path: = (qual caminho)

        - :accept: = (o que é aceito)

        - cookie: = (detalhes de conexão para uma próxima conexão)
    }

    - Response headers {

        - cache-control: = (controle do cache)

        - content-length: = (tamanho do conteúdo)

        - content-encoding: = (que tipo de codificação está tendo esse conteúdo)

        - set-cookie: = (coloque esse cookie para ser usado na próxima conexão)

        - server: = (qual servidor está sendo utilizado)
    }





## Status Code

    - Comunicação mais clara entre o servidor com o cliente


### 100
    
    - 100 = Continue (tudo certo)


### 200

    - 200 = OK (POST, GET)

    - 201 = Created (PUT)

    - 204: No content (DELETE, PUT)


### 300

    - 301 = Moved Permanently (recurso movido, pode vir com Header location:, method GET)

    - 308 = Permanent Redirect (recurso movido, method POST)
    
    - 302 = Found (encontrado mas movido temporariamente, GET)

    - 307 = Temporary Redirect (outras a não ser o GET)


### 400

    - 400 = Bad Request (pedido mau efetuado)

    - 401 = Unauthorized (não está autorizado a receber o pedido, chave ou header de autorização)

    - 403 = Forbidden (não temos permissão de entrar)

    - 404 = Not Found (recurso não foi encontrado)

    - 405 = Method Not Allowed (método não permitido)

    - 429 = Too Many Requests (muitos pedidos)


### 500

    - 500 = Internal Server Error (erro geral interno do servidor)
    
    - 503 = Service Unavaiable (serviço não está disponível naquele momento)





## DevDocs

    - Lista completa de ajuda de ferramentas de desenvolvimento

    * HTTP / Methods
    * HTTP / Headers
    * HTTP / Status