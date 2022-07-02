// $(document).ready(function () {
//     // Фильтр изображений
//     $('.boost__swapItem').click(function() {
//         let i = $(this).data('filter');
//         $('.boost__backImg').fadeOut(500);
//         $('.boost__backImg.f_' + i).fadeIn(500);
        
//         $('.boost__swapItem').removeClass('active-swap');
//         $(this).addClass('active-swap');
//     })
// })

let swapButton = document.querySelectorAll('.boost__swapItem');
swapButton.forEach(button => {
    button.onclick = changeImg;
});

function changeImg() {
    let imgNum = this.dataset.filter;
    
}

document.querySelector('.header__burger').onclick = () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
}


// Плавный скролл
document.querySelectorAll('a[href^="#"').forEach(link => {

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