const express = require("express") 
const server = express()
server.use(cors()) 
server.use(express.json()) 

app.get("/", function (req, res) {
    res.send("locadora") 
})


app.post("/reserva/", function(req, res) {
    const data = req.body
    conexao.query(`
        INSERT INTO reserva set ?`, [data], function (erro, resultado) {
            if (erro) {
                res.send(erro)
            }
            res.send(resultado.insertId);

        });
    })


















app.listen(3000)