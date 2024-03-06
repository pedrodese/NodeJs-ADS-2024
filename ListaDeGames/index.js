const express = require("express");

const app = express();
app.use(express.json());


app.listen(3080,() => {
    console.log("Servidor Rodando!");
});

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "God of War", studio: "Santa Monica", price: 250},
    {title: "Forza Horizon", studio: "PlayGround Games", price: 249},
    {title: "Microsoft Flight Simulator", studio: "Microsoft", price: 299},
    {title: "WYD", studio: "RaidHut", price: 0},
    {title: "Halo", studio: "Microsoft", price: 90}
];

app.get("/",(req, res) => {
    res.json(games);
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
})

