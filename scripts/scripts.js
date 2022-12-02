let x=230;

let yby = {
    elemento:{
        vida:{
            nome:"vida",
            ponto: 25,
            tamanho_barra: x
        },
        terra:{ 
            nome:"terra",
            ponto: 25,
            tamanho_barra: x
        },
        agua:{ 
            nome:"agua",
            ponto: 25,
            tamanho_barra: x
        },
        ar:{ 
            nome:"ar",
            ponto: 25,
            tamanho_barra: x
        }
    }

};
var elem=0;
var dice=0;
function selecao_elemento(){
    document.getElementById("personagem").src="media/Ola.gif";
    switch (elem){
        case 0:
            var elemento=yby.elemento.vida;
            var img="images/barra vermelha.png";
        break;
        case 1:
            var elemento=yby.elemento.terra;
            var img="images/barra marrom.png";
        break;
        case 2:
            var elemento=yby.elemento.agua;
            var img="images/barra azul.png";
        break;
        case 3:
            var elemento=yby.elemento.ar;
            var img="images/barra verde.png";
        break;
    }
    
    //alert(elemento.nome);
    var grupo=document.getElementById("grupo_ativo");
    grupo.style.display="flex";
    document.getElementById("br_grupo").src=img;
    document.getElementById("grupo").innerText=elemento.nome;
    document.getElementById("btn_dado").addEventListener("click", rolar_dado);
    document.getElementById("thumb_up").addEventListener("click", contador_pontos_pos);
    document.getElementById("thumb_down").addEventListener("click", contador_pontos_neg);
   /* if (elem==3){
        elem=0;
        
    }else{
        elem++;
    }*/
   
}                
function contador_pontos_pos(){
    //alert(elem+"t");
    switch (elem){
case 0:
    aumentar_vida(dice);
    document.getElementById("personagem").src="media/parabens.gif";
        break;
    case 1:
        aumentar_terra(dice);
        document.getElementById("personagem").src="media/animada_1.gif";
        break;
    case 2:
        aumentar_agua(dice);
        document.getElementById("personagem").src="media/animada_2.gif";
        break;
        case 3:
            aumentar_ar(dice);
            document.getElementById("personagem").src="media/dance_1.gif";
            break;
    }
}

function contador_pontos_neg(){
    //alert(elem+"t");
    switch (elem){
case 0:
    reduzir_vida(dice);
    document.getElementById("personagem").src="media/chora.gif";
        break;
    case 1:
        reduzir_terra(dice);
        document.getElementById("personagem").src="media/chora_2.gif";
        break;
    case 2:
        reduzir_agua(dice);
        document.getElementById("personagem").src="media/poxa.gif";
        break;
        case 3:
           reduzir_ar(dice);
           document.getElementById("personagem").src="media/ueh.gif";
            break;
    }
}
function aumentar_vida(dice){
    let ptuacao=document.getElementById("ptuacao_vida");
    let barra_vida=document.getElementById("barra_vida");
    switch (dice){
        case 1:
            yby.elemento.vida.ponto=yby.elemento.vida.ponto+5;
            break;
        case 2:
            yby.elemento.vida.ponto=yby.elemento.vida.ponto+10;
            break;
        case 3:
            yby.elemento.vida.ponto=yby.elemento.vida.ponto+15;
            break;
    }

    ptuacao.innerText=yby.elemento.vida.ponto;
    barra_vida.style.width=x*yby.elemento.vida.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;}
        selecao_elemento();
}
function aumentar_terra(){
    let ptuacao=document.getElementById("ptuacao_terra");
    let barra_terra=document.getElementById("barra_terra");
    switch (dice){
        case 1:
            yby.elemento.terra.ponto=yby.elemento.terra.ponto+5;
            break;
        case 2:
            yby.elemento.terra.ponto=yby.elemento.terra.ponto+10;
            break;
        case 3:
            yby.elemento.terra.ponto=yby.elemento.terra.ponto+15;
            break;
    }

    ptuacao.innerText=yby.elemento.terra.ponto;
    barra_terra.style.width=x*yby.elemento.terra.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;         }    
        selecao_elemento();      
}
function aumentar_agua(){
    let ptuacao=document.getElementById("ptuacao_agua");
    let barra_agua=document.getElementById("barra_agua");
    switch (dice){
        case 1:
            yby.elemento.agua.ponto=yby.elemento.agua.ponto+5;
            break;
        case 2:
            yby.elemento.agua.ponto=yby.elemento.agua.ponto+10;
            break;
        case 3:
            yby.elemento.agua.ponto=yby.elemento.agua.ponto+15;
            break;
    }

    ptuacao.innerText=yby.elemento.agua.ponto;
    barra_agua.style.width=x*yby.elemento.agua.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;}
        selecao_elemento();
}function aumentar_ar(){
    let ptuacao=document.getElementById("ptuacao_ar");
    let barra_ar=document.getElementById("barra_ar");
    switch (dice){
        case 1:
            yby.elemento.ar.ponto=yby.elemento.ar.ponto+5;
            break;
        case 2:
            yby.elemento.ar.ponto=yby.elemento.ar.ponto+10;
            break;
        case 3:
            yby.elemento.ar.ponto=yby.elemento.ar.ponto+15;
            break;
    }

    ptuacao.innerText=yby.elemento.ar.ponto;
    barra_ar.style.width=x*yby.elemento.ar.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;}
        selecao_elemento();
}

function reduzir_vida(dice){
    let ptuacao=document.getElementById("ptuacao_vida");
    let barra_vida=document.getElementById("barra_vida");
    switch (dice){
        case 1:
            yby.elemento.vida.ponto=yby.elemento.vida.ponto-5;
            break;
        case 2:
            yby.elemento.vida.ponto=yby.elemento.vida.ponto-10;
            break;
        case 3:
            yby.elemento.vida.ponto=yby.elemento.vida.ponto-15;
            break;
    }

    ptuacao.innerText=yby.elemento.vida.ponto;
    barra_vida.style.width=x*yby.elemento.vida.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;}
        selecao_elemento();
}
function reduzir_terra(){
    let ptuacao=document.getElementById("ptuacao_terra");
    let barra_terra=document.getElementById("barra_terra");
    switch (dice){
        case 1:
            yby.elemento.terra.ponto=yby.elemento.terra.ponto-5;
            break;
        case 2:
            yby.elemento.terra.ponto=yby.elemento.terra.ponto-10;
            break;
        case 3:
            yby.elemento.terra.ponto=yby.elemento.terra.ponto-15;
            break;
    }

    ptuacao.innerText=yby.elemento.terra.ponto;
    barra_terra.style.width=x*yby.elemento.terra.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;         }    
        selecao_elemento();      
}
function reduzir_agua(){
    let ptuacao=document.getElementById("ptuacao_agua");
    let barra_agua=document.getElementById("barra_agua");
    switch (dice){
        case 1:
            yby.elemento.agua.ponto=yby.elemento.agua.ponto-5;
            break;
        case 2:
            yby.elemento.agua.ponto=yby.elemento.agua.ponto-10;
            break;
        case 3:
            yby.elemento.agua.ponto=yby.elemento.agua.ponto-15;
            break;
    }

    ptuacao.innerText=yby.elemento.agua.ponto;
    barra_agua.style.width=x*yby.elemento.agua.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;}
        selecao_elemento();
}function reduzir_ar(){
    let ptuacao=document.getElementById("ptuacao_ar");
    let barra_ar=document.getElementById("barra_ar");
    switch (dice){
        case 1:
            yby.elemento.ar.ponto=yby.elemento.ar.ponto-5;
            break;
        case 2:
            yby.elemento.ar.ponto=yby.elemento.ar.ponto-10;
            break;
        case 3:
            yby.elemento.ar.ponto=yby.elemento.ar.ponto-15;
            break;
    }

    ptuacao.innerText=yby.elemento.ar.ponto;
    barra_ar.style.width=x*yby.elemento.ar.ponto/100+"px";
    if (elem==3){
        elem=0;
        
    }else{
        elem++;}
        selecao_elemento();
}
function iniciar(){
    var botao=document.getElementById("botao_iniciar");
    var cadastro=document.getElementById("cad");
    var descricao=document.getElementById("descricao");
    var txt_inicio=document.getElementById("txt_iniciar");
    descricao.style.display="none";
    txt_inicio.style.display="none";
    botao.style.display="none";
    cadastro.style.display="block";
}
function showModal(){
    var botao=document.getElementById("botao_iniciar");
    var descricao=document.getElementById("descricao");
    var element=document.getElementById("modal");
    element.classList.add("show-modal");
    descricao.classList.add("hide-descricao");
    botao.classList.add("hide-botao_iniciar");
}
function hideModal(){
    var botao=document.getElementById("botao_iniciar");
    var descricao=document.getElementById("descricao");
    var element=document.getElementById("modal");
    element.classList.remove("show-modal");
    descricao.classList.remove("hide-descricao");
    botao.classList.remove("hide-botao_iniciar");
}
function jg_num(){
    var num_j=document.getElementById("numero_jogadores").value;
    var inicio=document.getElementById("numero_de_grupos");
    //alert(num_j);
    if (num_j == ""){
        alert("Escolha um valor válido");
    }else{
        inicio.innerHTML="Numero de grupos: " +num_j;
        document.getElementById("cad").style.display="none"; 
        comeco = 1;
        barras_hp();
        personagem();
        instrucoes();
        selecao_elemento();

    }

}
function personagem(){
    let personagem=document.getElementById("yby");
    personagem.style.display="block";
}
function hide_personagem(){
    let personagem=document.getElementById("yby");
    personagem.style.display="none";
}
var contador=1;
/*function intrucoes_prev_page(){
        if (contador >1){
            texto=document.getElementById("txt_instrucoes");
            texto.innerHTML = document.getElementById("parte_"+contador).innerHTML;
            contador--;
            console.log(contador);
        }
       
    

    console.log(contador);
   
   
}
function intrucoes_next_page(){
    if (contador <4){
        texto=document.getElementById("txt_instrucoes");
        texto.innerHTML = document.getElementById("parte_"+contador).innerHTML;
        contador++;
        console.log(contador);
    }
       
        
        
    console.log(contador);
   
    
    
}*/
var comeco = 0; 
function hide_instrucoes(){
    var instrucoes = document.getElementById("instrucoes");
    instrucoes.classList.remove("show-modal");
    if(comeco ==1) {
    personagem();
    }
}
function instrucoes(){
    var instrucoes = document.getElementById("instrucoes");
    //console.log(instrucoes);
    instrucoes.classList.add("show-modal");
    hide_personagem();
    //document.getElementById("txt_instrucoes").innerHTML=document.getElementById("parte_1").innerHTML;
}

function barras_hp(){
    if (comeco == 1){
    var barras=document.getElementById("barras_hp");
    barras.style.display="block";
    var barra_vida=document.getElementById("barra_vida");
    var barra_terra=document.getElementById("barra_terra");
    var barra_agua=document.getElementById("barra_agua");
    var barra_ar=document.getElementById("barra_ar");
    
    
    barra_vida.style.width=x*0.25+"px";
    barra_terra.style.width=x*0.25+"px";
    barra_agua.style.width=x*0.25+"px";
    barra_ar.style.width=x*0.25+"px";
    }
}



function rolar_dado(){
    document.getElementById("dado").classList.add("show-modal");
    setTimeout(dado, 5000, 0 , 2);
}
function hide_dado(){
    document.getElementById("dado").classList.remove("show-modal");
    document.getElementById("img_dado").src="images/dado/N_peão_de_3_lados.gif";
}
function dado(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            let lado=Math.floor(Math.random() * (max - min + 1)) + min;
           
            switch (lado) {

            case 0:
                document.getElementById("img_dado").src="images/dado/peao_lado_1.jpg";
                document.getElementById("img_dado").style.width="400px";
                setTimeout(hide_dado, 3000);
                dice=1;
                //alert(dice);
                break;
            case 1:
                document.getElementById("img_dado").src="images/dado/peao_lado_2.jpg";
                document.getElementById("img_dado").style.width="400px";
                setTimeout(hide_dado, 3000);
                dice=2;
                //alert(dice);
                break;
               
            case 2:
                document.getElementById("img_dado").src="images/dado/peao_lado_3.jpg";
                document.getElementById("img_dado").style.width="400px";
                setTimeout(hide_dado, 3000);
                dice=3;
                //alert(dice);
            break;
            }
           // alert(dice);
        }

