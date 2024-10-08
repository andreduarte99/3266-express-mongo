//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;


app.listen(PORT, () => {
    console.log("servidor escutando!");
});


// const rotas = {
//     "/": "Curso de Express API",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// };

// const server = http.createServer((req,res) =>{
//     res.writeHead(200, {"Conteny-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//     console.log("servidor escutando!");
// });



