const express = require("express") 
const server = express()

server.use(cors()) 
server.use(express.json()) 
express.urlencoded({ extended: true })


app.get("/", function (req, res) {
    res.send("locadora") 
})


app.post("/reserva/", function(req, res) {
    const data = {
        nome: req.body.nome,
        email: req.body.email,
        categoria: req.body.categoria
    };
    conexao.query(`
        INSERT INTO reserva set ?`, [data], function (erro, resultado) {
            if (erro) {
                res.send(erro)
            }
            res.send(resultado.insertId);

        });
    });




















app.listen(3000)