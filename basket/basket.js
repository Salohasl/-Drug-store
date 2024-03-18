let resultPrice = document.querySelector('.resultPrice');

function removeLocalStorage(){

    const wrapper = document.querySelector('.product-show')

    let savedBravecto = JSON.parse(localStorage.getItem('bravecto')) || [];
    let savedNesgard = JSON.parse(localStorage.getItem('nesgard')) || [];
    let savedForesto = JSON.parse(localStorage.getItem('foresto')) || [];
    let savedPrevicocs = JSON.parse(localStorage.getItem('previcocs')) || [];
    let savedSimparica = JSON.parse(localStorage.getItem('simparica')) || [];
    let savedSpectra = JSON.parse(localStorage.getItem('spectra')) || [];
    let savedVetoril = JSON.parse(localStorage.getItem('vetoril')) || [];
    let savedProduct = [...savedBravecto, ...savedNesgard, ...savedForesto, ...savedPrevicocs, ...savedSimparica, ...savedSpectra, ...savedVetoril];
    
    for(let product of savedProduct){
        let productDiv = document.createElement('div');
        productDiv.classList.add('product-block');
        wrapper.append(productDiv);

        let div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <h2>${product.name}:</h2>
            <p>Вес и мг: ${product.desc}</p>
        `;
        productDiv.appendChild(div);
        
        let divClose = document.createElement('div');
        divClose.classList.add('close-product');
        divClose.innerHTML = `
            <span></span>
            <span></span>
        `;
        div.prepend(divClose);

    

        let divCenter = document.createElement('div');
        divCenter.classList.add('product-count');
        divCenter.innerHTML = `
            <button class="min" data-price="${product.price}">-</button>
            <p>1</p>
            <button class="max" data-price="${product.price}">+</button>
        `;
        productDiv.appendChild(divCenter);

        let divRight = document.createElement('div');
        divRight.classList.add('product-price');
        divRight.innerHTML = `
            <p>Цена: <span class="price" data-price="${product.price}">${product.price}р</span></p>
        `;
        productDiv.appendChild(divRight);


        divClose.addEventListener('click', () => {
            productDiv.remove();

            // Update the total price
            let totalPrice = Number(resultPrice.textContent) - Number(product.price);
            resultPrice.textContent = totalPrice;
        });

        
        num = product.price;
        resultPrice.textContent = Number(resultPrice.textContent) + Number(num);

    }
    
    

}
removeLocalStorage();


function quantityOfGoods (){
    let priceProduct = document.querySelectorAll('.price');
    
    let num;
    document.querySelectorAll('.max').forEach(function(button) {
        button.addEventListener("click", function() {
            var valueElement = this.previousElementSibling; 
            var x = parseInt(valueElement.textContent);
            x++;
            valueElement.textContent = x;
            for(let price of priceProduct){
                if(button.dataset.price == price.dataset.price){
                    num = price.textContent.slice(0, -1); // Удаляем последний символ
                    num = Number(num) + Number(price.dataset.price); // Увеличиваем значение 
                    price.textContent = num + 'р'; // Добавляем обратно рубль и обновляем текст элемента

                    let totalPrice = Number(resultPrice.textContent) + Number(price.dataset.price);
                    resultPrice.textContent = totalPrice;
                }
            }
                
        });
    });
    
    document.querySelectorAll('.min').forEach(function(button) {
        button.addEventListener("click", function() {
            var valueElement = this.nextElementSibling; 
            var x = parseInt(valueElement.textContent);
            if (x > 1) {
                x--;
                valueElement.textContent = x;
                for(let price of priceProduct){
                    if(button.dataset.price == price.dataset.price){
                        num = price.textContent.slice(0, -1); // Удаляем последний символ 
                        num = Number(num) - Number(price.dataset.price); // Уменьшаем значение
                        price.textContent = num + 'р'; // Добавляем обратно рубль и обновляем текст элемента

                        let totalPrice = Number(resultPrice.textContent) - Number(price.dataset.price);
                        resultPrice.textContent = totalPrice;
                    }
        
                 
                }
            }
        });
    });

}

quantityOfGoods();


let productBlock = document.querySelectorAll('.product-block')
localStorage.setItem('length', productBlock.length)
