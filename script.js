let randomNum=Math.floor(Math.random()*25)+1;
let checkBtn= document.querySelector(".check");
let againBtn=document.querySelector(".again");
let guessId= document.querySelector(".guess");
let message= document.querySelector(".message");
let numberField =document.querySelector(".number");
let highscore=document.querySelector(".highscore");
let score= document.querySelector(".score");

let point=10;
let highpoint= 0;



checkBtn.onclick = () => {
    console.log(randomNum);
    if (point>1){
            if(guessId.value <= 25 && guessId.value >=1) {   

                if (guessId.value < randomNum) {
                    message.innerHTML="it is too low. "
                    point --;
                    score.innerHTML=point;
                }else if (guessId.value > randomNum){
                    message.innerHTML="it is high"
                    point --;
                    score.innerHTML= point ;
                }else {
                    message.innerHTML= "you win";
                    numberField.innerHTML=randomNum;
                    document.body.style.backgroundColor="green";
                    
                  
                    if(point > highpoint) {
                    highpoint= point;
                    highscore.innerHTML= point;
                   }
                    

                }
            } else {
                alert("please insert number between 1 and 25")
              }
            
        } else {
            point --;
            score.innerHTML= point;
            message.innerHTML="you are looser";
            document.body.style.backgroundColor="red";
            checkBtn.disabled= true;
    }
}

againBtn.onclick=() => {
    
    point=10;
  randomNum= Math.floor(Math.random()*25)+1;
  message.innerHTML= "Start guessing...";
  document.body.style.backgroundColor="#222";
  numberField.innerHTML= "?";
  score.innerHTML= 10;
  guessId.value=" ";
}