const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")

//config
    app.engine('handlebars', handlebars.engine({defaultLayout: "main"}));
    app.set('view engine', 'handlebars');

    app.use(express.static((path.join(__dirname, "public"))))

//rotas
    app.get("/", (req, res) => {
        res.render("index")
    })

    app.get("/loading", (req, res) => {
        res.render("loading")
    })

    app.get("/curriculo", (req, res) => {
        res.render("curriculo", {title: "curriculo"})
    })

    app.get("/return", (req,res) => {
        res.render("return")
    })

//porta
const porta = 8081
app.listen(porta, (req, res) => {
    console.log("Servidor iniciado")
})