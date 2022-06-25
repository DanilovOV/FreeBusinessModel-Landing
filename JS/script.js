$(document).ready(function () {
    $('.header__burger').click(function() {
        $('.header__burger,.header__menu').toggleClass('active');
    });

    // Фильтр изображений
    $('.boost__swapItem').click(function() {
        let i = $(this).data('filter');
        $('.boost__backImg').hide();
        $('.boost__backImg.f_' + i).show();
        
        $('.boost__swapItem').removeClass('active-swap');
        $(this).addClass('active-swap');
        return false;
    })
})

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