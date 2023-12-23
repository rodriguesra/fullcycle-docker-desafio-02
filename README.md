# Nome do Projeto: Desafio Docker Full Cycle

## Descrição
Projeto desenvolvido para um desafio do curso Full Cycle, que envolve a utilização de Docker com Nginx, Node.js e MySQL.

## Funcionalidades
- Nginx atuando como proxy reverso para Node.js.
- Aplicação Node.js que se conecta a um banco de dados MySQL.
- Criação automática da tabela `people` no MySQL.
- Cada acesso à aplicação Node.js insere um nome na tabela `people` e exibe uma lista de nomes.

## Tecnologias Utilizadas
Liste as tecnologias utilizadas no projeto, como:
- Docker
- Docker Compose
- Nginx
- Node.js
- MySQL

## Como Executar

### Pré-requisitos
- Docker e Docker Compose instalados.

### Instruções de Execução
1. Clone o repositório: git clone [https://github.com/rodriguesra/fullcycle-docker-desafio-02]

2. Navegue até o diretório do projeto: cd fullcycle-docker-desafio-02

3. Construa e inicie os containers: docker-compose up -d

4. Acesse a aplicação via navegador em `http://localhost:8080`.

## Autor
- Rafael Rodrigues (rodriguesra)
