const choices = document.querySelectorAll(".choice");
console.log(choices);

const computergenerator = () => {
    const indx = Math.random() * 3;
    const index = Math.floor(indx);
    const options = ["paper", "seasor", "stone"];
    return options[index];
}


let gamePlay = (userchoices) => {
    const computerChoice = computergenerator();
    console.log(computerChoice);
    const mesval=document.querySelector("#message");
    if (userchoices === computerChoice) {
        mesval.innerHTML="draw match";
    } else {
        let userwin = false; 
        if (userchoices === "paper") {
            userwin = computerChoice === "stone";
        }
        if (userchoices === "stone") {
            userwin = computerChoice === "seasor";
        }
        if (userchoices === "seasor") {
            userwin = computerChoice === "paper";
        }
        display(userwin);
        counter(userwin);
    }
}
var counting=document.querySelector("#usercout");
var counti=document.querySelector("#coutcomputer");

const counter=(userwin)=>{
    if(userwin){
        let cout=0;
        cout++;
        counting.innerHTML=cout;
    }
    else{
        cout++;
        counti.innerHTML=cout;
    }
}

const display = (userwin) => {
    const mesval=document.querySelector("#message");
    if (userwin) {
        mesval.innerHTML="You win!";
    } else {
        mesval.innerHTML="You lose. Sorry!";
    }
}


choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userchoices = choices.getAttribute("id");
        console.log("User chose this:", userchoices);
        gamePlay(userchoices);
    })

}
);

