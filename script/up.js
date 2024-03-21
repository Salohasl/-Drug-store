/* Для всплывающего окна */ 
let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('nav');
let link = document.querySelector('.link');
menuBtn.addEventListener('click', () =>{
menuBtn.classList.toggle('active');
menu.classList.toggle('popUp');
link.classList.remove('active');
});

let linkBtn = document.querySelectorAll('.linkBtn');
linkBtn.forEach(elem => {
    elem.addEventListener('click', ()=>{
        menuBtn.classList.remove('active');
        menu.classList.remove('popUp');
    })
})

function quantityOfGoods(){
    let basketBlock = document.querySelector('.basketBlock');
    if(null){
        basketBlock.dataset.count = 0;
    }else{
        basketBlock.dataset.count = localStorage.getItem('length');
    }
}

quantityOfGoods();