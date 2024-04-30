document.addEventListener('DOMContentLoaded', function () {

	//contain_site.setProperty("visibility","visible"); // Oubli style ^
	contain_site.style.setProperty("visibility","visible");
    
});


let loader=      document.querySelector('.loader');

const content= document.querySelector('.content');
const menutop= document.querySelector('.menutop');
let bool=true;
let pos;



function disableScroll() {
	// Get the current page scroll position
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

		// if any scroll is attempted, set this to the previous value
		window.onscroll = function() {
			window.scrollTo(scrollLeft, scrollTop);
		};
}

function enableScroll() {
	window.onscroll = function() {};
}


for(let i=1;i<32;i++){
   
let boxphoto= document.createElement('div');
let photo= document.createElement('img');
boxphoto.classList.add('box');
boxphoto.style.order=i;
photo.setAttribute('src',`/ressources/photo/Image01_${i}.jpg`)

boxphoto.appendChild(photo);
content.appendChild(boxphoto);


boxphoto.addEventListener('click',(e)=>{
    console.log(e);
    if(bool){      
    e.target.parentNode.parentNode.parentNode.appendChild(boxphoto);
   console.log(window.document.body.offsetHeight);
    boxphoto.classList.toggle('aggrandir');      
    boxphoto.style.top=window.scrollY+"px";   
    content.classList.toggle('blur');
    menutop.classList.toggle('redui');
    bool=false;
    //disableScroll();

    }

    else{
        content.appendChild(boxphoto);
        boxphoto.style.order=i;
        boxphoto.classList.toggle('aggrandir');
        content.classList.toggle('blur');
        menutop.classList.toggle('redui');
        bool=true;
       // enableScroll();
    }
})

}


    

