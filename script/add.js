function showBlock(){
    let btn = document.querySelectorAll('#showBtn');
    const paymentDescrip = document.querySelector('.payment-descrip');
    const decorDescrip = document.querySelector('.decor-descrip');
    const deliveryDescrip = document.querySelector('.delivery-descrip');
    let btnPayment = document.querySelector('.btnPayment');
    let btnDecor = document.querySelector('.btnDecor');
    let btnDelivery = document.querySelector('.btnDelivery');
    for(let elem of btn){
        elem.addEventListener('click', (e)=>{
            let decorTarget = e.target.closest('.decor-item');
            let paymentTarget = e.target.closest('.payment-item');
            let deliveryTarget = e.target.closest('.delivery-item');
            if(decorTarget){
                decorDescrip.classList.toggle('active');
                btnDecor.classList.toggle('rotate');
            }else if(paymentTarget){
                paymentDescrip.classList.toggle('active');
                btnPayment.classList.toggle('rotate');
            }else if(deliveryTarget){
                deliveryDescrip.classList.toggle('active');
                btnDelivery.classList.toggle('rotate');
            }
        })
    }
}showBlock();