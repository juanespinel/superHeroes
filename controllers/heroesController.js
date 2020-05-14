const fs = require('fs');

let jsonHeroes = fs.readFileSync('./src/data/heroes.json', 'utf8');
let heroes = JSON.parse(jsonHeroes);

const heroesController = {
    listar: function(req, res) {
        res.write('**Listado de Heores**');
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
        for(let i = 0; i < heroes.length; i++) {
            if(heroes[i].id == req.params.idHeroe) {
                res.write(`Hola, mi nombre es ${heroes[i].nombre} y soy ${heroes[i].profesion}.`);
                res.end();
            }
        }
        res.end(`No tenemos un heroe con ese ID`);
    }
    
    /*
    bio: function (req, res) {

    }
    */

};

module.exports = heroesController;