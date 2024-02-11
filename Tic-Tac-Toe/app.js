let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let count = 0;

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    msgContainer.classList.add("hide");
    enableboxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        count++;
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
            box.style.color = "Yellow";
        }else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "Beige";
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableboxes = () => {
    for(box of boxes)
    {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const draw = () => {
    msg.innerText = "The Game ends in a draw"
    msgContainer.classList.remove("hide");

}

const checkWinner = () => {
    for(pattern of winPattern)
    {
       let posval1 = boxes[pattern[0]].innerText;
       let posval2 = boxes[pattern[1]].innerText;
       let posval3 = boxes[pattern[2]].innerText;

       if(posval1 != "" && posval2 != "" && posval3 != "")
       {
          if(posval1 === posval2 && posval2 === posval3)
          {
            console.log("winner");
            showWinner(posval1);
          }
          else if(posval1 === posval2 && posval2 !== posval3 && count === 9)
          {
             draw();
          }
          
       }
    }
   
};
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);