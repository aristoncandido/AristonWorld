const saida = document.querySelector('#digitos')
const player = document.querySelector("#player")
var mute = "false"


function digitacao(texto, contador){


    if(contador < texto.length){

           
        setTimeout( ()=>{

              
            saida.textContent += texto.charAt(contador);
            contador++;

            digitacao(texto , contador);
                





        } ,90 )
             
         

    }




}

digitacao('Aqui voce encontra todas as ideias virtuais de Ariston Candido e por onde ele passou ! :P',-10);


/* FUNÇÃO DE MUTAR */

player.addEventListener('click',()=>{

    if(mute=="false"){



        const src = document.querySelector('audio');
        const icone = document.querySelector("#player");
        icone.src = './imgs/mute.png'
    
    
    
        src.src = "";
        mute="true"
    
    }else{



        const src = document.querySelector('audio');
        const icone = document.querySelector("#player");
        icone.src = './imgs/som.png';

        src.src = "./audios/Barulho de chuva.mp3"
        mute="false"


    }

  


});

