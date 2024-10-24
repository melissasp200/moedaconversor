document.getElementById('currency-form').addEventListener('submit', function(event){

    // Obter valores de entrada do formulário
    const valor = parseFloat (document.getElementById('Valor').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Definir taxa de câmbio fixa com utilização de objeto
    const exchangeRates = {

        USD: {EUR:XX, BRL:XX},

    

    };


})