

var msg= document.getElementById('msg')
var img1= document.getElementsByClassName('img1');
var img2= document.getElementsByClassName('img2');

function game(){
 var random= Math.ceil(Math.random() * 6);
 var random2= Math.ceil(Math.random() * 6);
 img1.src = `images/dice${random}.png`;
 img2.src = `images/dice${random2}.png`;


    if(random > random2){
        msg.innerHTML= 'Player 1 WIN!!'
    }else{
        msg.innerHTML= 'Player 2 WIN!!'
    }
}
