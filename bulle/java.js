const content = document.querySelector('.content');
const button = document.querySelector('button');

function creerBubble(){
let bubble = document.createElement('div');
  bubble.classList.add('bubble');
let randomHeight= (Math.random()*100+100)+"px";
  let posX =Math.random()*100+'%';
 bubble.style.height=randomHeight;
  bubble.style.width=randomHeight;
  bubble.style.left=posX;
  content.appendChild(bubble);
  
   
  
}

let bulle=setInterval(creerBubble,100);
button.addEventListener('click',creerBubble);
