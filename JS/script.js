document.querySelector('.header__burger').onclick = () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
}

let swapButtons = document.querySelectorAll('.boost__paginationButton');
swapButtons.forEach(button => button.onclick = changeImg);

function changeImg() {
    document.querySelector('.active-button').classList.remove('active-button');
    this.classList.add('active-button');

    let newActiveImgNum = this.dataset.filter;
    document.querySelector('.active-img').classList.remove('active-img');
    document.querySelectorAll('.boost__backImg')[newActiveImgNum].classList.add('active-img')
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    window.scrollBy({
        top: scrollTarget.getBoundingClientRect().top,
        behavior: 'smooth'
    });
}