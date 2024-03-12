import express from 'express';
import games from "./dadosGames/dados.js";


const app = express();

const buscarGamesPorNome = (nameGame) => {
    return games.filter(game => game.title.toLowerCase().includes(nameGame.toLowerCase()));
};

app.use(express.json());


app.listen(3080,() => {
    console.log("Servidor Rodando!");
});

app.get('/games/:idGame', (req, res) => {
    const idGame = parseInt(req.params.idGame);
    let mensagemErro = '';
    let game;

    if(!(isNaN(idGame))){
        game = games.find(u => u.id === idGame);
        if(!game){
            mensagemErro = 'Game não encontrado'
        }
    } else{
        mensagemErro = 'Requisição inválida'
    }

    if(game){
        res.json(game);
    }else{
        res.status(404).send({"erro": mensagemErro});
    }
});


app.get('/games', (req,res) => {
    const gameName = req.query.busca;
    const resultadoGames = gameName ? buscarGamesPorNome(gameName) : games;
    if(resultadoGames.length > 0){
        res.json(games);
    }else{
        res.status(404).send({"erro": "Nenhum Game encontrado pelo nome"})
    }
});

app.post("/novogame",(req, res) => {
    let title = req.body.title
    let studio = req.body.studio
    let price = req.body.price

    let newGame = {title, studio, price};

    games.push(newGame);

    res.send("OK");
});

app.put('/novogame/:index',(req, res) => {
    const {index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);
});

app.delete("/:index", (req, res) => {
    const {index} = req.params;
    games.splice(index,1);
    return res.json({message: "O Jogo foi deletado"});
});

