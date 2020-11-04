const express = require('express');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/book', async (request, response) => {
    const books = await connection('book').select('*');
    return response.json(books);
});


routes.get('/book/:id', async (request, response) => {
    const id = request.params.id;   
    const book = await connection('book').where('id', id).first();
    return response.json(book);
});

routes.post('/book', async (request, response) => {
    const {title, author, price, launchDate} = request.body;

    const id = await connection('book').insert({
            author,
            title,
            launchDate,
            price,
        }).then(row => {return row[0]});;   
    
    const book = await connection('book').where('id', id).first();

    return response.json(book);
});

routes.put('/book', async (request, response) => {
    const {id, title, author, price, launchDate} = request.body;

    await connection('book')    
        .where('id', id)
        .update({
            author,
            title,
            launchDate,
            price,
        });
    
    const book = await connection('book').where('id', id).first();

    return response.json(book);
});

routes.delete('/book/:id', async (request, response) => {
    const id = request.params.id;
    await connection('book')    
        .where('id', id)
        .delete();
    return response.json();
});

module.exports = routes;