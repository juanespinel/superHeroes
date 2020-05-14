const indexController = function(req, res){
        res.write('Ni Superman, Iron Man o La Mujer Maravilla\nson tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio.\nEsperamos que ellas y ellos te sirvan como inspiracion\npara poder cumplir tus objetivos.\n\nRecuerda: ¡nunca pares de creer en ti!');
        res.end();
      };

module.exports = indexController;