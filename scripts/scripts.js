        function dado(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            let lado=Math.floor(Math.random() * (max - min + 1)) + min;
            switch (lado) {

            case 0:
                alert("face 1");
                break;
            case 1:
                    alert("Face2");
                break;
            case 2:
                alert("Face 3");
            break;
            }
        }
    var pt_vd=25;
    var pt_tr=25;
    var pt_ag=25;
    var pt_ar=25;
    vida = document.getElementById("vida");
    terra = document.getElementById("terra");
    agua = document.getElementById("agua");
    ar = document.getElementById("ar");
    //alert(vida);
    
        var elemento = "";
        function muda_elemento(e, b)
        {
            sel = document.getElementsByClassName("seletor");
            //alert(sel);
           for (i=0; i<4; i++){
                //alert("mudando as dimensões");
                sel[i].style.width = "20px";
                sel[i].style.height = "20px";
            }
            elemento=e;
            barra=document.getElementById(b);
            barra.style.width = "35px";
            barra.style.height = "35px";
            //alert (elemento);
            return e;
        }
        
        
        function barra_mais(elem)
        {
            //alert(elem);
           
            //alert(nova_barra);
            switch (elem){
            case 'terra':
                document.getElementById("personagem").src="media/dance_1.gif"
                if (pt_tr<100){
            pt_tr=pt_tr+5;}
            terra.innerHTML = pt_tr;
            break;
            case 'vida':
            document.getElementById("personagem").src="media/animada_1.gif"
            if (pt_vd<100){
            pt_vd=pt_vd+5;}
            vida.innerHTML = pt_vd;
                break;
                case 'agua':
            document.getElementById("personagem").src="media/animada_2.gif"
            if (pt_ag<100){
            pt_ag=pt_ag+5;}
            agua.innerHTML = pt_ag;
            break;
            case 'ar':
            document.getElementById("personagem").src="media/dance_2.gif"
            if (pt_ar<100){
            pt_ar=pt_ar+5;}
            ar.innerHTML = pt_ar;         
            break;
            }
            nova_barra="barra_"+elem;
            //alert (nova_barra);
            var barra_new = document.getElementById(nova_barra);
            
            //alert(barra_new);
            tam = barra_new.offsetWidth;
            if (tam <500){
            tam = Number(tam)+50;
            barra_new.style.width = tam+"px";
            //alert(tam);
            }
            
            
        }
        function barra_menos(elem)
        {
            //alert(elem);
           
            //alert(nova_barra);
            switch (elem){
            case 'terra':
                document.getElementById("personagem").src="images/personagem/angry_1.gif"
                if (pt_tr>0){
            pt_tr=pt_tr-5;}
            terra.innerHTML = pt_tr;
            break;
            case 'vida':
            document.getElementById("personagem").src="images/personagem/angry_2.gif"
            //alert(vida.innerText);
            if (pt_vd>0){
            pt_vd=pt_vd-5;}
            vida.innerHTML = pt_vd;
                break;
                case 'agua':
            document.getElementById("personagem").src="images/personagem/sad.gif"
            if (pt_ag>0){
            pt_ag=pt_ag-5;}
            agua.innerHTML = pt_ag;
            break;
            case 'ar':
            document.getElementById("personagem").src="images/personagem/sleepy.gif"
            if (pt_ar>0){
            pt_ar=pt_ar-5;}
            ar.innerHTML = pt_ar;         
            break;
            }
            nova_barra="barra_"+elem;
            //alert (nova_barra);
            var barra_new = document.getElementById(nova_barra);
            
            //alert(barra_new);
            tam = barra_new.offsetWidth;
            if (tam >0){
            tam = Number(tam)-50;
            barra_new.style.width = tam+"px";
            //alert(tam);
            }
            
            
        }
