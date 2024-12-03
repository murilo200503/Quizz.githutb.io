/**
 * Configurações iniciais
 * 
 */

const express = require('express');
const app = express();
const port = 3000;

//Indica ao servior que iremos trabalhar com JSON 
app.use(express.json());

/*
    Simula um banco de dados
*/ 
let quizz = [
    {
        nome: "Harry potter",
        perguntas: [{
            pegunta: "Qual era a casa de Cedrico?",
            name:'q1',
            repostas: [
                { value: "r1", resposta: "Grifinoria", certo: false },
                { value: "r2", resposta: "Sonserina", certo: false },
                { value: "r3", resposta: "Lufa lufa", certo: true },
                { value: "r4", resposta: "Corvinal", certo: false },
            ]
        },
        {
            pegunta: "Sirius era oque do Harry?",
            name:'q2',
            repostas: [
                { value: "r1", resposta: "Pai", certo: false },
                { value: "r2", resposta: "Avô", certo: false },
                { value: "r3", resposta: "Padrinho", certo: true },
                { value: "r4", resposta: "Melhor amigo", certo: false },
            ]
        },
        {
            pegunta: "Quem era o melhor amigo do Harry?",
            name:'q3',
            repostas: [
                { value: "r1", resposta: "Draco", certo: false },
                { value: "r2", resposta: "Simas", certo: false },
                { value: "r3", resposta: "Ronald", certo: true },
                { value: "r4", resposta: "Cedrico", certo: false },
            ]
        },
        {
            pegunta: "Quem foi o vilão do 4º filme/livro?",
            name:'q4',
            repostas: [
                { value: "r1", resposta: "Olho tonto Moody", certo: false },
                { value: "r2", resposta: "Igor Karkaroff", certo: false },
                { value: "r3", resposta: "Barto Crouch JR", certo: true },
                { value: "r4", resposta: "Barto Crouch", certo: false },
            ]
        },
        {
            pegunta: "Quantos horcrux Voldemort criou?",
            name:'q5',
            repostas: [
                { value: "r1", resposta: "4", certo: false },
                { value: "r2", resposta: "9", certo: false },
                { value: "r3", resposta: "7", certo: true },
                { value: "r4", resposta: "5", certo: false },
            ]
        }]
    }
    
];

/**
 * 
 * Endpoint para buscar os dados da lista
 * 
 */

app.get('/quizz', (req, res) => {
    res.status(200).json(quizz);
});

app.post('/item', (req, res) => {
    //os arrays tem uma propriedade chamada length... essa propriedade calcula o tamanho
    //do meu vetor e retorna ele em formato de inteiro...
    const newItem = { id: items.length + 1, ...req.body}
    //push insere um novo item no vetor...
    items.push(newItem);
    res.status(201).json(newItem);
});

//vamos passar como parametro na chamada o id do objeto que irá ser excluido
app.delete('/item/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);
    if(index !== -1) {
        //desafio remover o item do array
        items.splice(index, 1);
        res.status(200).json({mensage: "Item removido!"});
    } else {
        res.status(404).json({mensage: "Item não encontrado"});
    }
});

app.put('/item/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = {id, ...req.body}
        res.status(200).json(items[index]);
    } else {
        res.status(404).json({ message: "Item não encontrado!"});
    }

});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
})