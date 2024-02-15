let userscore=0;
let compscore=0;
 
const choices=document.querySelectorAll(".choice");
const userpara=document.querySelector("#user-score");
const compara=document.querySelector("#comp-score");

let msg=document.querySelector("#msg");


 const gencompchoice= ()=>{
    compchoice=["rock","paper","scissors"];
    const randomIndx=Math.floor(Math.random()*3);
    return compchoice[randomIndx];  
 };


const showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
       userscore++;
       userpara.innerText=userscore;
       msg.innerText=`you win! your  ${userChoice} beat ${compchoice}`;
        msg.style.backgroundColor ="green";
    }
    
    else{
        compscore++;
        compara.innerText=compscore;
        msg.innerText=`you lose! computer ${compchoice} beat ${userChoice}`;
        msg.style.backgroundColor ="Red";
    
    }
}

const drawgame=()=>{
    msg.innerText="game draw!";
    msg.style.backgroundColor ="yellow";
}

const playgame=(userChoice)=>{

compchoice=gencompchoice();

if(userChoice===compchoice){
    drawgame();
}
else{
let userwin=true;
if(userChoice==="rock"){
    userwin= compchoice ==="paper" ?false:true;
}
else if(userChoice==="paper"){

userwin=compchoice ==="scissors"?false:true;
}
else{
    userwin=compchoice==="rock"?false:true;
}
showwinner(userwin,userChoice,compchoice);
}


 };

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").id;
      playgame(userChoice);
      
    });
 });