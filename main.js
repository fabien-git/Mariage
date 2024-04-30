let date =new Date().getTime();
//console.log(date);
let dateMariage =new Date(2023,4,20).getTime();
let jour= Math.floor((dateMariage-date)/(3600*24*1000));
let heure= Math.floor(((dateMariage-date)%(3600*24*1000))/(3600*1000));
let min= Math.floor(((dateMariage-date)%(3600*1000))/(60*1000));
//console.log(jour +' '+ heure + ' '+ min);
let container= document.querySelector('.container');
let body= document.querySelector('body');
let menu= document.querySelector('.menu');
let menumobile= document.querySelector('.menumobile');
let black= document.querySelector('.black');
let blackul= document.querySelector('.black ul');
let hamburger= document.querySelector('.menuimage');
let ul=document.querySelector('.menu ul');
let lineH=document.querySelectorAll('.menuimage .hamburger .lineH');
let lineHmobile=document.querySelectorAll('.menumobile .hamburger .lineH');
let li=document.querySelectorAll('li');
let pos;
let lia=document.querySelectorAll('li a');
let a= document.querySelectorAll('a');

let line =document.querySelectorAll('.line');
let carre =document.querySelectorAll('.carre');
let boolH=true;
let banniere=document.querySelector('imagebanniere');

body.style.background='black';


//container.style.display="none";

let pc =document.querySelector('.timer span:last-child');
let pc2 =document.querySelector('.timer');
let bool= false;

let index=0;
let indexH=0;
let indexM=0;
//console.log(jour);

let countdown= setInterval(chrono2,1000);


        
function chrono2(){
    pc.innerHTML= jour+"j "+heure+ "h "+ min+"min";
   
    }  

function chrono(){

    if(index==jour&&indexH==heure&&indexM==min){
       console.log("holalala!")
        pc.innerHTML= jour+"j "+heure+ "h "+ min+"min";
       clearInterval(countdown);
      // let countdown2= setInterval(chrono2,6000);

       return;
              
              
    }
        else{             
            if(index<jour){
        index++;
           }
    if(indexH<heure){
        indexH++;
           }
    if(indexM<min){
        indexM++;
    }       
    pc.innerHTML= index+"j "+indexH+ "h "+ indexM+"min";
    
        
    }
    return;
}


// Fonction menu navigation

 window.addEventListener('scroll',menuTop);

function menuTop(e){
const{scrollTop, scrollHeight, clientHeight}= document.documentElement;
let posMenu= scrollTop+80+"px";
menu.style.top= posMenu;


}

function animBouton(){
    lineH[0].classList.toggle('anim');
    lineH[1].classList.toggle('anim3');
    lineH[2].classList.toggle('anim2');
    lineHmobile[0].classList.toggle('anim');
    lineHmobile[1].classList.toggle('anim3');
    lineHmobile[2].classList.toggle('anim2');
}

hamburger.addEventListener('click',()=>{    
    if(boolH){
    animBouton();
   ;
    ul.classList.toggle('petit');
    setTimeout(()=>menu.classList.toggle('petit'),200);
    boolH=false;
    
    li.forEach((el)=>{
        el.classList.toggle('petit');
    })
    line.forEach((el)=>{
        el.classList.toggle('petit');
    })
}
else{
    menu.classList.toggle('petit');
   
    animBouton();
    setTimeout(()=>ul.classList.toggle('petit'),300);
    boolH=true;
   
    li.forEach((el)=>{
        el.classList.toggle('petit');
    })
    line.forEach((el)=>{
        el.classList.toggle('petit');
    })

}

   
})


menumobile.addEventListener('click',()=>{
    if(boolH){
    black.classList.add('apparition');
    blackul.classList.add('disparition');
    animBouton();
    boolH=false;
    }
    else{

        black.classList.remove('apparition');
        blackul.classList.remove('disparition');
       animBouton();
        boolH=true;
    
    }
    

})

black.addEventListener('click',()=>{
    black.classList.remove('apparition');
    blackul.classList.remove('disparition');
    animBouton();
    boolH=true;

})


/*scroll to*/

function moveTo(localisation){
   
    console.log("loca : " +localisation)
    
    let loca=localisation+"s";
    
for(let i=0; i<a.length;i++){
   //console.log(a[i].id);
    if(a[i].id==loca){
        
        let val =a[i].offsetTop;
       
        return val;
      
    }
   
    
}
}

lia.forEach((el)=>{
   
    el.addEventListener('click',()=>{
        
        pos=moveTo(el.getAttribute('id'));
       
        window.scrollTo({top:pos,behavior:"smooth"});
    
    })

})

function creerBubble(e){
    
    let dernier=document.querySelector('.dernier')
    let bubble = document.createElement('div');
      bubble.classList.add('bubble');
    let randomHeight= Math.floor((Math.random()*10))+2;
      let posX =Math.random()*100+'%';
    bubble.style.transform="scale("+randomHeight+")";

     
     
    
      bubble.style.left=posX;
      dernier.appendChild(bubble);
      
      
       
      
    }


    let buttonform=document.querySelector('.resume');
  //  buttonform.addEventListener('click',bulle);
    //let bulleanim;
  
   function bulle(){
    //e.preventDefault();
    bulleanim=setInterval(creerBubble,100);
    setTimeout(stopanim,5000);

   }

   function stopanim(){
    
        clearInterval(bulleanim);
   }