function showBlock(){
    let btn = document.querySelectorAll('#showBtn');
    const paymentDescrip = document.querySelector('.payment-descrip');
    const decorDescrip = document.querySelector('.decor-descrip');
    let btnPayment = document.querySelector('.btnPayment');
    let btnDecor = document.querySelector('.btnDecor');
    for(let elem of btn){
        elem.addEventListener('click', (e)=>{
            let decorTarget = e.target.closest('.decor-item');
            let paymentTarget = e.target.closest('.payment-item');
            //и так же 3 блок
            if(decorTarget){
                decorDescrip.classList.toggle('active');
                btnDecor.classList.toggle('rotate');
            }else if(paymentTarget){
                paymentDescrip.classList.toggle('active');
                btnPayment.classList.toggle('rotate');
            }
        })
    }
}showBlock();