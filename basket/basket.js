let resultPrice = document.querySelector('.resultPrice');
let sum = document.getElementById('sum');
let order = document.getElementById('order');
let quantity = 1;


let savedBravecto = JSON.parse(localStorage.getItem('bravecto')) || [];
let savedNesgard = JSON.parse(localStorage.getItem('nesgard')) || [];
let savedForesto = JSON.parse(localStorage.getItem('foresto')) || [];
let savedPrevicocs = JSON.parse(localStorage.getItem('previcocs')) || [];
let savedSimparica = JSON.parse(localStorage.getItem('simparica')) || [];
let savedSpectra = JSON.parse(localStorage.getItem('spectra')) || [];
let savedVetoril = JSON.parse(localStorage.getItem('vetoril')) || [];
let savedProduct = [...savedBravecto, ...savedNesgard, ...savedForesto, ...savedPrevicocs, ...savedSimparica, ...savedSpectra, ...savedVetoril];


function removeLocalStorage(){

    const wrapper = document.querySelector('.product-show')

    
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
            <p class="res">1</p>
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

// Находим индекс продукта в массиве savedProduct
const index = savedBravecto.findIndex(p => p.name === product.name);
if (index !== -1) {
    // Удаляем продукт из массива
    savedBravecto.splice(index, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('bravecto', JSON.stringify(savedBravecto));
}

// Находим индекс продукта в массиве savedProduct
const index1 = savedNesgard.findIndex(p => p.name === product.name);
if (index1 !== -1) {
    // Удаляем продукт из массива
    savedNesgard.splice(index1, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('nesgard', JSON.stringify(savedNesgard));
}

// Находим индекс продукта в массиве savedProduct
const index2 = savedForesto.findIndex(p => p.name === product.name);
if (index2 !== -1) {
    // Удаляем продукт из массива
    savedForesto.splice(index2, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('foresto', JSON.stringify(savedForesto));
}


// Находим индекс продукта в массиве savedProduct
const index3 = savedPrevicocs.findIndex(p => p.name === product.name);
if (index3 !== -1) {
    // Удаляем продукт из массива
    savedPrevicocs.splice(index3, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('previcocs', JSON.stringify(savedPrevicocs));
}

// Находим индекс продукта в массиве savedProduct
const index4 = savedSimparica.findIndex(p => p.name === product.name);
if (index4 !== -1) {
    // Удаляем продукт из массива
    savedSimparica.splice(index4, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('simparica', JSON.stringify(savedSimparica));
}

// Находим индекс продукта в массиве savedProduct
const index5 = savedSpectra.findIndex(p => p.name === product.name);
if (index5 !== -1) {
    // Удаляем продукт из массива
    savedSpectra.splice(index5, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('spectra', JSON.stringify(savedSpectra));
}
// Находим индекс продукта в массиве savedProduct
const index6 = savedVetoril.findIndex(p => p.name === product.name);
if (index6 !== -1) {
    // Удаляем продукт из массива
    savedVetoril.splice(index6, 1);
    // Обновляем данные в localStorage
    localStorage.setItem('vetoril', JSON.stringify(savedVetoril));
}



            // Update the total price
            let totalPrice = Number(resultPrice.textContent) - Number(product.price);
            resultPrice.textContent = totalPrice;
            sum.value = "Сумма:" + ' ' + resultPrice.textContent + ' ' + 'р';
            location.reload()

            order.value += product.name + ' ' + product.desc + ' ' + 'Количество:' + quantity +  ',' + '\n ';
        });

        order.value += product.name + ' ' + product.desc + ' ' + 'Количество:' + quantity +  ',' + '\n ';
        
        num = product.price;
        resultPrice.textContent = Number(resultPrice.textContent) + Number(num);

        sum.value = "Сумма:" + ' ' + resultPrice.textContent + ' ' + 'р';




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
                    price.setAttribute('data-res',  valueElement.textContent);
                    num = price.textContent.slice(0, -1); // Удаляем последний символ
                    num = Number(num) + Number(price.dataset.price); // Увеличиваем значение 
                    price.textContent = num + 'р'; // Добавляем обратно рубль и обновляем текст элемента

                    let totalPrice = Number(resultPrice.textContent) + Number(price.dataset.price);
                    resultPrice.textContent = totalPrice;
                    sum.value = "Сумма:" + ' ' + resultPrice.textContent + ' ' + 'р';


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
                        price.setAttribute('data-res',  valueElement.textContent);
                        num = price.textContent.slice(0, -1); // Удаляем последний символ 
                        num = Number(num) - Number(price.dataset.price); // Уменьшаем значение
                        price.textContent = num + 'р'; // Добавляем обратно рубль и обновляем текст элемента

                        let totalPrice = Number(resultPrice.textContent) - Number(price.dataset.price);
                        resultPrice.textContent = totalPrice;
                        sum.value = "Сумма:" + ' ' + resultPrice.textContent + ' ' + 'р';

                    }
        
         
                }
            }
        });
    });


}

quantityOfGoods();



let productBlock = document.querySelectorAll('.product-block')
localStorage.setItem('length', productBlock.length)
