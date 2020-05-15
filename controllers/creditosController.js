const HEADER_CHARTSET = {"Content-Type": "text/plain; charset=utf-8"}

const creditosController = {
  mostrar: function (req, res) {
        res.writeHead(200, HEADER_CHARTSET);
        res.write('ESTOS SON LOS CREDITOS');
        res.write('\n\n');
        res.write('**JUAN ESPINEL**');
        res.write('\n\n');
        res.write('**cuarentialCoders**');
        res.end();
      }
    };

module.exports = creditosController;