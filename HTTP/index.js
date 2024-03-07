import  Express  from 'express';

const app = Express();
var carros = ['Omega', 'Prisma'];
app.use(Express.urlencoded({ extended: true}));

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});

app.put('/cars/update/:id',(req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.get('/', (req, res) => {
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
});

app.get('/sobre',(req, res) => {
    res.send("<h3>Rotas no Express</h3><h4>Sobre")
});

app.listen(3000, () =>{
    console.log('Servidor iniciado na porta 3000')
});

