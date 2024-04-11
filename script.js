let valor = '';



function mostrar(value){
    valor += value;
    document.getElementById('display').value = valor;
}

function limpiar(){
    valor = "";
    document.getElementById('display').value = valor;
}

function calcular(){
    try{

        const result = eval(valor)
        valor = result.toString();
        document.getElementById('display').value = valor;

    }catch(error){
        valor = "";
        document.getElementById('display').value = 'Error, solo acuna te puede responder';
    }
}