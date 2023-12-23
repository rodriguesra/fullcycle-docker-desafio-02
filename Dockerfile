# Escolha a imagem base
FROM node:14

# Instale o Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do projeto
COPY . .

# Exponha a porta que a aplicação utiliza
EXPOSE 3000

# Defina o comando para rodar a aplicação
CMD ["node", "app.js"]
