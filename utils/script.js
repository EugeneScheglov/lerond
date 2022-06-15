document.querySelector('.header__menu-button').addEventListener('click', () => {
    document.querySelector('.popup').classList.toggle('popup_opened');
});

document.querySelector('.popup__close').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('popup_opened');
});