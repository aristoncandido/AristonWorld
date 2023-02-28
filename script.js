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




const janela = document.querySelector('.janela');

let inicialX; // coord inicial do objeto no eixo X
let inicialY; // coord inicial do objeto no eixo Y
let Arrastando = false; // estado do objeto se esta arrastando ou não

let atualX ; // coord atual do objeto no eixo X
let atualY; // coord atual do objeto no eixo Y

let offsetX = 0; //diferença da atual para a inicial X
let offsetY = 0; // diferença da atual para a inicial Y






janela.addEventListener('mousedown',Movimentar);
document.addEventListener('mousemove',Andar);
document.addEventListener("mouseup",Parar);



function Movimentar(e){

    inicialX = e.clientX - offsetX ; 
    inicialY = e.clientY - offsetY;


   if(e.target == janela){
     
    Arrastando = true;

      
   }




    


}

function Andar(e){

    if(Arrastando){
        e.preventDefault();
       
        atualX = e.clientX - inicialX;

        atualY = e.clientY - inicialY;

        offsetX = atualX;

        offsetY = atualY;

        Atualizar(atualX,atualY,janela);










    }

}



function Parar(){

    inicialX = atualX; // atualizando os valores iniciais
    inicialY = atualY;  // atualizando as novas posiçoes atuais

    Arrastando = false;


}

function Atualizar(xPos,yPos,el){

    
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}





