const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")

// Configuração
app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, "public")))
app.set('views', path.join(__dirname, 'views'))

// Rotas
app.get("/", (req, res) => {
    console.log("Acessou a rota /")
    res.render("index")
})

app.get("/loading", (req, res) => {
    console.log("Acessou a rota /loading")
    res.render("loading")
})

app.get("/curriculo", (req, res) => {
    console.log("Acessou a rota /curriculo")
    res.render("curriculo", { title: "curriculo" })
})

app.get("/return", (req, res) => {
    console.log("Acessou a rota /return")
    res.render("return")
})

// Porta
const porta = process.env.PORT || 8081
app.listen(porta, () => {
    console.log("Servidor iniciado na porta", porta)
})
