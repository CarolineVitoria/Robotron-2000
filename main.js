function escopo(){
    const pecas = {
        "bracos": {
            "forca": 29,
            "poder": 35,
            "energia": -21,
            "velocidade": -5
        },
    
        "blindagem": {
            "forca": 41,
            "poder": 20,
            "energia": 0,
            "velocidade": -20
        },
        "nucleos":{
            "forca": 0,
            "poder": 7,
            "energia": 48,
            "velocidade": -24
        },
        "pernas":{
            "forca": 27,
            "poder": 21,
            "energia": -32,
            "velocidade": 42
        },
        "foguetes":{
            "forca": 0,
            "poder": 28,
            "energia": 0,
            "velocidade": -2
        }
    }

    const botoes = document.querySelectorAll('.controle-ajuste');
    const valoresContador = document.querySelectorAll('.controle-contador');
    const estatisticaNumeros = document.querySelectorAll('.estatistica-numero');
    const botaoTroca = document.querySelector('i');
    const alert = document.querySelector('.div-alert');
    const botaoFechar = document.querySelector('.fa-x');
    const main = document.querySelector('main');
    
    botoes.forEach(function(el){
        el.addEventListener("click", function(e){
            const botao = e.target;
            valoresContador.forEach(function(contador){
                let operacao;
                if(botao.parentElement === contador.parentElement){
                    if(botao.classList[1]=== 'bmenos' && contador.value>0){
                        contador.value -= 1;
                        operacao='subtrair';
                        atualizarDados(botao , operacao);
                    }else if(botao.classList[1]=== 'bmais' && contador.value<10){
                        let valor = Number(contador.value);
                        contador.value=valor+=1;
                        operacao = 'somar';
                        atualizarDados(botao, operacao);
                    }else{
                        alert.style.display = 'block';
                        main.style.cssText = 'filter: blur(3px);';
                    }
                }
            })
            
        })
    })

    function atualizarDados(botao, operacao){
        const arrayObjetosPecas = Object.keys(pecas);
        arrayObjetosPecas.forEach(avaliar);
        function avaliar (peca){
            const propriedades = Object.keys(pecas.bracos);
            const divPai= botao.parentElement.className
            if(divPai.indexOf(peca)!=-1 && operacao==='subtrair'){

                for(let i=0; i<4; i++){
                    estatisticaNumeros[i].textContent-=pecas[peca][propriedades[i]];
                }
        }else if(divPai.indexOf(peca)!=-1 && operacao==='somar'){
            for(let i=0; i<4; i++){
                estatisticaNumeros[i].textContent=Number(estatisticaNumeros[i].textContent)+ pecas[peca][propriedades[i]];
            }
        }
        }

    }
    botaoTroca.addEventListener("click", ()=>{
        let img = document.querySelector('.robo');
        let valorAtt = img.getAttribute("src");
        if(valorAtt.indexOf('azul')!=-1){
            img.setAttribute("src", 'img/rosa.png');
        }else if(valorAtt.indexOf('rosa')!=-1){
            img.setAttribute("src", 'img/branco.png');
        }else{
            img.setAttribute("src", 'img/azul.png');
        }
        
        
    })
    botaoFechar.addEventListener('click', ()=>{
        alert.style.display = 'none';
        main.style.filter='none';
    })


}
escopo();
