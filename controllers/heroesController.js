const fs = require('fs');
const path = require('path') //IGUALA LA RUTA

const HEADER_CHARTSET = {"Content-Type": "text/plain; charset=utf-8"} //PARA EL ENVIO CON ACENTOS Y Ñ

let jsonHeroes = fs.readFileSync(path.join(__dirname, '../src/data/heroes.json'), 'utf8');
let heroes = JSON.parse(jsonHeroes);

const heroesController = {
    listar: function(req, res) {
        res.writeHead(200, HEADER_CHARTSET);
        res.write('**          Listado de Heores              **');
        for(let i = 0; i < heroes.length; i++) {
            res.write('\n\n');
            res.write(`- id: ${heroes[i].id}`);
            res.write('\n');
            res.write(`Nombre: ${heroes[i].nombre}`);
            res.write('\n');
            res.write(`Profesion: ${heroes[i].profesion}`);
            res.write('\n');
            res.write(`Pais: ${heroes[i].pais}`);
            res.write('\n');
            res.write(`Resenia: ${heroes[i].resenia}`);
        }
            res.end()
    },
    detalle: function (req, res) {
        res.writeHead(200, HEADER_CHARTSET);
        let idHeroe = req.params.id;

        for(let i = 0; i < heroes.length; i++) {
            if(heroes[i].id == idHeroe) {
                for(let propiedad in heroes[i]) {
                    res.write(`${propiedad}: ${heroes[i][propiedad]}`);
                }
            res.end();
            }
        }
        res.end('No encontramos el heroe que estás buscando. Podés probar en un ratito');
    },    
    detalleBio: function (req, res) {
        let idHeroe = req.params.id;
        let reqOk = req.params.ok;
        res.writeHead(200, HEADER_CHARTSET);
        heroes.forEach(function(elemento, posicion, elArray) {
            if(elemento.id == idHeroe) {
                if(reqOk != 'ok') {
                    res.end(`Hola soy ${elemento.nombre}\n\nLamento que no desees saber más de mi :(`)
                } else {
                    res.write(`Esta es la BIO de ${elemento.nombre} \n\n`);
                    res.end(elemento.resenia);
                }
            }
        })
        res.end('No encontramos un héroe para mostrarte su biografía')
    }
};

module.exports = heroesController;