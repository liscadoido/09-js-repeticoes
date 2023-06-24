
function Contar(){
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = "Impossivel contar";
        window.alert('[ERRO] Prencha todos os campos')
    }
    else{
        res.innerHTML = "Contado: <br>";
        let Inicio = Number(ini.value);
        let Final = Number(fim.value);
        let Passo = Number(passo.value);
        if(Passo <= 0){
            window.alert('Passo invalido ! Considerando PASSO 1');
            Passo = 1;
        }
        if(Inicio < Final){
            // Contagem crescente
            for(let c = Inicio; c <= Final; c += Passo){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        else{
            // Contagem decrescente
            for(let c = Inicio; c >= Final; c -= Passo){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;

    }

}

function tabuada(){
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if(num.value.lenght == 0){
        window.alert("Por favor digite um numero !");
    }
    else{
        let numero = Number(num.value);
        let contagem = 1
        tab.innerHTML = "";
        while( contagem <=  10){
            let item = document.createElement("option");
            item.text = `${numero} x ${contagem} = ${numero*contagem}`;
            item.value = `tab${contagem}`
            tab.appendChild(item);
            contagem++
        }
    }
}
