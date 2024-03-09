function showProduct(){
    const mite = document.getElementById('mite');
    const antiInflammatory = document.getElementById('antiInflammatory');
    const worm = document.getElementById('worm');
    const hormonal = document.getElementById('hormonal');
    const btn = document.querySelectorAll('.productBtn');

    btn.forEach(elem => {
        elem.addEventListener('click', (event)=>{
            for(let el of btn){
                el.classList.remove('active');
            }
            elem.classList.add('active');
            switch (event.target.textContent) {
                case 'Противовоспалительные':
                    antiInflammatory.style.display = 'flex';
                    worm.style.display = 'none';
                    hormonal.style.display = 'none';
                    mite.style.display = 'none';
                    break;

                case 'Препарат от глистов':
                    worm.style.display = 'flex';
                    antiInflammatory.style.display = 'none';
                    hormonal.style.display = 'none';
                    mite.style.display = 'none';
                    break;

                case 'Гормональные':
                    hormonal.style.display = 'flex';
                    worm.style.display = 'none';
                    antiInflammatory.style.display = 'none';
                    mite.style.display = 'none';
                    break;

                case 'От клещей и блох':
                    mite.style.display = 'flex';
                    worm.style.display = 'none';
                    hormonal.style.display = 'none';
                    antiInflammatory.style.display = 'none';
                    break;
            }
        })
    })
}showProduct();

function showForm(){
    const form = document.querySelector('.form');
    form.style.display = 'block';
}