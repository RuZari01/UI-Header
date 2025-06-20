//*выпадающее меню
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

//*мобилка прокрутка
button.addEventListener('click', () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Сначала обновляем состояние кнопки
    button.setAttribute('aria-expanded', !expanded);
    button.classList.toggle('active');

    // Открываем/закрываем меню
    if (!expanded) {
        requestAnimationFrame(() => {
            menu.style.maxHeight = menu.scrollHeight + "px";
        });
    } else {
        menu.style.maxHeight = null;
    }

    // Прокрутка НЕ внутри условия открытия меню, а сразу после
    if (isMobile && !expanded) {
        window.scrollBy({
            top: 200,
            behavior: 'smooth'
        });
    }
});