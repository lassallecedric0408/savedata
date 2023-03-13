const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(multer().none());

let todos = [
    {
        id: 1,
        label: 'Sortir la voiture',
        done: false
    },
    {
        id: 2,
        label: 'Arroser le chien',
        done: false
    },
    {
        id: 3,
        label: 'Laver les plantes',
        done: true
    }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    console.log(req.body);
    const { label } = req.body;

    todos.push({
        id: Math.max(...todos.map(todo => todo.id)) + 1,
        label,
        done: false
    });

    res.json(todos);
});

app.put('/todos/:id', (req, res) => {
    todos = todos.map(todo => {
        if (todo.id === Number(req.params.id)) {
            return {
                ...todo,
                done: !todo.done
            };
        }

        return todo;
    });

    res.json(todos);
});

app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(todo => todo.id !== Number(req.params.id));

    res.json(todos);
});

app.listen(3000, () => {
    console.log(`Listening on http://localhost:3000`);
});