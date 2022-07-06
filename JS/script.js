let swapButtons = document.querySelectorAll('.boost__swapItem');
swapButtons.forEach(button => {
    button.onclick = changeImg;
});

function changeImg(e) {
    document.querySelector('.active-swap').classList.remove('active-swap');
    this.classList.add('active-swap');
    let imgNum = this.dataset.filter;
    document.querySelectorAll('.boost__backImg').forEach(img => img.style.display = 'none')
    document.querySelectorAll('.boost__backImg')[imgNum].style.display = 'block';
}

document.querySelector('.header__burger').onclick = () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
}


// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // Высота фиксированного заголовка
        const topOffset = 0;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});