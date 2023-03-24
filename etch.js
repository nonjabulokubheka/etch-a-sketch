let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
  createContainer(16);

  document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON"){
      click = !click;
      let draw = document.querySelector("#draw");
      if(click){
        draw.innerHTML = "You Can Continue Drawing!";
      }
      else{
        draw.innerHTML = "Drawing board has been paused!"
      }
    }

  })
 
  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function(){
    let size = getSize();
    createContainer(size);
  })
})

function createContainer(size){
  let container = document.querySelector(".container");

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows =  `repeat(${size}, 1fr)`;

  let numDiv = size * size;

  for(let i = 0; i < numDiv; i++){
    let div = document.createElement('div');
    div.addEventListener("mouseover", colorDiv)
    container.insertAdjacentElement("beforeend", div);
  }
}

function getSize(){
  let input = prompt("What will be the size of your board?");
  let message = document.querySelector("#message");
  if(input == ""){
    message.innerHTML = "Please provide an even number."
  }
  else if(input < 0 || input > 100){
    message.innerHTML = "provide a number between 1 to 100"
  }
  else{
    message.innerHTML = "Now you can play"
    return input;
  }
}


function colorDiv(){
 if(click){
  if(color == 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }
  else{
    this.style.backgroundColor = 'black'
  } 
}
}

function setColor(colorChoice){
  color = colorChoice;
}

function resetContainer(){
  let divs = document.querySelectorAll("div")
  divs.forEach((div) => div.style.backgroundColor = "white")
}