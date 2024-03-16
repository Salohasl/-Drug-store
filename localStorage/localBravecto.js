function saveLocalStorage(){
    let basket = document.querySelector('.basket');
    let filterBtn = document.querySelectorAll('.choiceBtn');

    let arrProduct = [];
    basket.addEventListener('click', function(){
        for(let elem of filterBtn){
            if(elem.classList.contains('active')){
                let objProduct = {
                    name: elem.dataset.name,
                    price: elem.dataset.price,
                    desc: elem.textContent
                }
                arrProduct.push(objProduct)
                console.log(arrProduct)
                localStorage.setItem('bravecto', JSON.stringify(arrProduct));
            }
        }
    })
}
saveLocalStorage();