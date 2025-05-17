const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.json({
        'message': 'Hello World Child Beeshal!'
    })
})

const quotes = [
    {'id': 1, 'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'},
    {'id': 2, 'quote': 'The way to get started is to quit talking and begin doing.'},
    {'id': 3, 'quote': 'Life is what happens when you\'re busy making other plans.'},
    {'id': 4, 'quote': 'Get busy living or get busy dying.'},
    {'id': 5, 'quote': 'You have within you right now, everything you need to deal with whatever the world can throw at you.'}
];

app.get('/quotes', (req,res)=>{
    res.json(quotes);
})

app.post('/quotes', (req,res)=>{
    const newQuote = {
        id: quotes.length + 1,
        quote: req.body.quote
    }
    quotes.push(newQuote)
    res.status(201).json(quotes)
})


app.listen(3030, ()=>console.log("Server listening on http://localhost:3030"))