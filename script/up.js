/* Для всплывающего окна */ 
let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('nav');
let link = document.querySelector('.link');
menuBtn.addEventListener('click', () =>{
menuBtn.classList.toggle('active');
menu.classList.toggle('popUp');
link.classList.remove('active');
});


function quantityOfGoods(){
    let basketBlock = document.querySelector('.basketBlock');
    if(null){
        basketBlock.dataset.count = 0;
    }else{
        basketBlock.dataset.count = localStorage.getItem('length');
    }
    
    console.log(basketBlock.dataset.count)
}

quantityOfGoods();