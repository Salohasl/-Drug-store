function filterFunc(){
    let filterBtn = document.querySelectorAll('.choiceBtn');
    let product = document.querySelectorAll('.imgblock');
    let price = document.querySelector('.price');

    filterBtn.forEach(item =>{
        item.addEventListener('click', ()=>{
            for(let el of product){
                if(item.value == el.dataset.name){
                    el.style.display = 'block';
                    price.textContent = item.dataset.price;

                }else{
                    el.style.display = 'none';
                }
            }
            for(let it of filterBtn){
                if(it != this){
                    it.classList.remove('active');
                }
            }
            item.classList.toggle('active');

            

        })
    })
}filterFunc();