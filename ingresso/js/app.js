function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if(tipoIngresso == 'pista') {
        comprarPista(qtd);
    }else { if(tipoIngresso == 'superior') {
            comprarSuperior(qtd);
        }else { if(tipoIngresso == 'inferior') {
                comprarInferior(qtd);
            }
        }
    }
    
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista.');
    }else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSup) {
        alert('Quantidade indisponível para tipo superior.');
    }else {
        qtdSup = qtdSup - qtd;
        document.getElementById('qtd-superior').textContent = qtdSup;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInf) {
        alert('Quantidade indisponível para tipo inferior.');
    }else {
        qtdInf = qtdInf - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInf;
        alert('Compra realizada com sucesso!');
    }
}

