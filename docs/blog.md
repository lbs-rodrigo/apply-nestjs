# sample-blog (0.0.0-dev.01)

## Tech Stack: nodejs + nestjs

## Blog 
Para esse desafio pedimos uma API em Node.js para a criação de um blog. Esse blog deve conter posts, categorias atrelados ao post e autor do post.

## Requisitos
- A listagem dos posts: (GET) 
    - response: guid, autor, titulo e categoria

- O detalhe de cada post: (GET)
    - request: guid
    - response: guid, autor, título, descrição e categorias

- Adicionar novos posts: (POST)
    - request: guid, autor, título, descrição e categorias
    - response: 204
    
- Editar post: (PATCH)
    - request: guid, autor, título, descrição e categorias
    - response: 
- Excluir post: autor, título, descrição e categorias

## Coisas que seriam legais de ter:


## Analise
- Analisar qual melhor arquitetura (redis, rabbitMQ, kafka e etc)
- Adcionar versionamento por tags
- Adicionar testes unitarios
- Automatizar os testes unitarios
- Criar o dockerfile
- Plus: disponibilizar versão com nodejs+express

- Criar o README.md abordando os seguintes temas
    - aviso para não considerar a relevancia da simplicidade do teste em contraponto as tecnologias utilizadas.
    - instrucoes de instalação
    - instruções sobre os testes
    - disponibilização do swagger
    - desenho da arquitetura
    - colletion do postman

- Disponibilizar repositorio publico