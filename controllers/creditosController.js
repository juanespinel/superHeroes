const creditosController = function (req, res) {
        res.write('ESTOS SON LOS CREDITOS');
        res.write('\n\n');
        res.write('**JUAN ESPINEL**');
        res.end();
      };

module.exports = creditosController;