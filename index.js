var nomes = document.getElementById('inputNome');
let tel = document.getElementById('inputTel');
let btn = document.getElementById('btn-enviar');
let listaNomes = document.getElementById('listaNomes');
let listaTels = document.getElementById('listaTels');
let btnLimpar = document.getElementById('btn-limpar');
btn.addEventListener("click", ()=>{
    listaNomes.value += nomes.value + "\n";
    listaTels.value += tel.value + "\n";
    nomes.value = "";
    tel.value = "";
    
})

btnLimpar.addEventListener('click', ()=>{
    listaNomes.value = "";
    listaTels.value = "";
})

