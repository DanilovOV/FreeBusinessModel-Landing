$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });

    // Фильтр изображений
    $('.boost__swapItem').click(function (event) {
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

        // Если есть фиксированный заголовок, задать доп. отступ, равный его высоте
        // Если нет, то установить значение 0
        const topOffset = 0;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});