let button = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newgamebtn")
let hide = document.querySelector(".winner");
let show = document.querySelector(".winnertext");

let arr = [[2,5,8],[2,4,6],[0,1,2],[0,3,6],[3,4,5],[6,7,8],[0,4,8],[1,4,7],];
let playerturn = true;
button.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("button has clicked")
        
        if(playerturn){
            btn.innerText = "X"
            playerturn = false;
        }
        else{
            btn.innerText = "O";
            playerturn = true;
        }
        btn.disabled = true;

        whowin();
    })
});
function showresult(winner){
    show.innerText=`Congratulations, Winner is ${winner}`;
    hide.classList.remove("hide")
    stopthegame();
}
function whowin(){
    arr.forEach(pattern => {
        let position1 = button[pattern[0]].innerText;
        let position2 = button[pattern[1]].innerText;
        let position3 = button[pattern[2]].innerText;
        let stopthegame = false;
        if(position1!="" && position2!="" && position3!=""){
            if(position1==position2 && position2==position3){
                console.log(`Winner ${position1}`);
                showresult(position1)
            }
        }
    });
}

function stopthegame(){
    for(let buttons of button){
        buttons.disabled = true;
    }
}

resetbtn.addEventListener("click",()=>{
    playerturn = true;
    hide.classList.add("hide")
    for(let buttons of button){
        buttons.disabled = false;
        buttons.innerText=""
    }
})
newgamebtn.addEventListener("click",()=>{
    playerturn = true;
    hide.classList.add("hide")
    for(let buttons of button){
        buttons.disabled = false;
        buttons.innerText=""
    }
})
