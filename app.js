const express = require('express');
const mysql = require('mysql');
const app = express();

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'db', // Nome do serviço do MySQL no docker-compose
    user: 'root', // Substitua com seu usuário
    password: '12345', // Substitua com sua senha
    database: 'db' // Substitua com o nome do seu banco de dados
});

connection.connect();

// Rota principal
app.get('/', (req, res) => {
    // Insere um novo nome na tabela people
    const nome = 'Rafael Rodrigues'; // Substitua com o nome desejado
    connection.query('INSERT INTO people (name) VALUES (?)', [nome], (err, results) => {
        if (err) throw err;

        // Consulta todos os nomes na tabela people
        connection.query('SELECT name FROM people', (err, results) => {
            if (err) throw err;

            // Monta a resposta HTML
            let html = '<h1>Full Cycle Rocks!</h1>';
            html += '<ul>';
            for (const row of results) {
                html += `<li>${row.name}</li>`;
            }
            html += '</ul>';

            res.send(html);
        });
    });
});

app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3000');
});
