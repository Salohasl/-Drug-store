function removeLocalStorage(){

    const wrapper = document.querySelector('.product')

    let savedBravecto = JSON.parse(localStorage.getItem('bravecto')) || [];
    let savedNesgard = JSON.parse(localStorage.getItem('nesgard')) || [];
    let savedProduct = [...savedBravecto, ...savedNesgard];
    
    for(let product of savedProduct){
        let div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
        `;
        wrapper.appendChild(div);

        let divCenter = document.createElement('div');
        divCenter.classList.add('product-count');
        divCenter.innerHTML = `
            <button>-</button>
            <p>1</p>
            <button>+</button>
        `;
        wrapper.appendChild(divCenter);

        let divRight = document.createElement('div');
        divRight.classList.add('product-count');
        divRight.innerHTML = `
            <p class="price">${product.price} р</p>
        `;
        wrapper.appendChild(divRight);
    }
    
    

}
removeLocalStorage();