window.addEventListener('scroll', onScroll);

const accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach(item => item.addEventListener('click', activeMenu)) ;
document.querySelector('.open-menu').addEventListener('click', openMenu);
document.querySelector('.close-menu').addEventListener('click', closeMenu);

function onScroll(){
  if(scrollY >= 1000){
    backToTopButton.classList.add("show");
  }else{
    backToTopButton.classList.remove("show");
  }
}
function openMenu(){
  document.body.classList.add('menu-expended');
}
function closeMenu(){
  document.body.classList.remove('menu-expended');
}
function activeMenu(){    
    if(this.classList.contains("active")){                
        this.classList.remove("active");       
    }else{        
        accordionItem.forEach(element => element.classList.remove('active'));
        this.classList.add("active");         
    
    }  
} 
ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 700,   
  }).reveal(`
    #start .wrapper,   
    #designedForTheFuture .col-a,
    #designedForTheFuture .col-b h3,
    #designedForTheFuture .col-b p,
    #stateOfTheArtInfrastructure .col-a,
    #stateOfTheArtInfrastructure .col-b,
    #freeOpenSimple .col-a,
    #freeOpenSimple .col-b h3,
    #freeOpenSimple .col-b p,
    footer .logo,
    footer h4,
    footer ul
  `)    


