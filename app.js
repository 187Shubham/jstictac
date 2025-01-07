let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(" .msg-container");
let msg = document.querySelector("#msg");


let turn0 = true ; //playerX , player0

//2Darray
// let arr2 = [["appel" , "litchi"] , [ "potato" , "mushroom"] , ["pants" ,"shirts"]];

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame=()=>{
    turn0 = true ;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("box was clicked");
if(turn0){ // ye true then playerO - O print kryga
    box.innerHTML = "O";
    turn0 = false; // next k liye X set kryga 
} else{
    box.innerHTML = "X"; // if above condition fail then x print hoga 
    turn0 = true; // next k liye set krdeyga opposite
}
 box.disabled = true; 
 
checkWinner();
    });
} );


const  disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const  enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner =(winner)=>{
    msg.innerHTML = `Congratulations, Winner is  Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }
 

 const checkWinner =()=>{
    for(let pattern of winPatterns){ // array k andr array hai usko each array ko access krha h
        //boxes class run time se connect k liye then pattern array k index position k liye and innerhtml us index box ki value dekhne k liye
           let pos1Val =  boxes[pattern[0]].innerHTML;
           let pos2Val =  boxes[pattern[1]].innerHTML ;
           let pos3Val =  boxes[pattern[2]].innerHTML; 
 
 if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
    if(pos1Val == pos2Val && pos2Val == pos3Val){
        console.log("winner" , pos1Val);
        showWinner(pos1Val);
    }
}
 }
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);