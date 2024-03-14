function filterFunc(){
    let filterBtn = document.querySelectorAll('.filterBtn');
    let product = document.querySelectorAll('.description-product');


    filterBtn.forEach(item =>{
        item.addEventListener('click', ()=>{
            for(let el of product){
                if(item.value == el.dataset.name){
                    el.style.display = 'block';
                }else{
                    el.style.display = 'none';
                }
            }
        })
    })
}filterFunc();