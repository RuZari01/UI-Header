//*выпадающее список кнопки
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    button.addEventListener('click', (e) => {
        const isActive = button.classList.contains('active');
        button.classList.toggle('active');

        if (!isActive) {
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-hidden', 'false');
            menuLinks.forEach(link => link.setAttribute('tabindex', '0'));
        } else {
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
            menuLinks.forEach(link => link.setAttribute('tabindex', '-1'));
        }
    });
});

//*
const checkbox = document.getElementById("burger-toggle");
const targetElement = document.getElementById("menu");
const targetElement2 = document.getElementById("buttons-filter");
const targetElement3 = document.body;

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        targetElement.classList.add("active");
        targetElement2.classList.add("active");
        targetElement3.classList.add("active");
    } else {
        targetElement.classList.remove("active");
        targetElement2.classList.remove("active");
        targetElement3.classList.remove("active");
    }
});
