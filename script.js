const saida = document.querySelector('#digitos')
const player = document.querySelector("#player")


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

    const src = document.querySelector('audio');
    const icone = document.querySelector("#player");
    icone.src = './imgs/mute.png'



    src.src = "";

});

