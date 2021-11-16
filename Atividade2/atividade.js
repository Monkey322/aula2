const input = require('readline-sync')
//calculo de juros
  
var taxajuros = taxajuros/100


function montanteapagar(capitalemprestado, taxadejuros, tempo) {
    return capitalemprestado * Math.pow((1 + taxajuros), tempo);

    
};

capitalemprestado = input.questionInt('qual o capital emprestado?');

taxajuros = input.questionInt('qual a taxa de juros?');

tempo = input.questionInt('quanto tempo?');




console.log(montanteapagar(capitalemprestado, taxajuros, tempo));
     

