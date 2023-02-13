///// header navigation dropdown \\\\\
const projectsBtn = document.querySelectorAll('.header__item')[1];
const servicesBtn = document.querySelectorAll('.header__item')[3];
const projectsDropdown = document.querySelector('.header__dropdown__projects');
const servicesDropdown = document.querySelector('.header__dropdown__services');

projectsBtn.addEventListener('mouseenter', () => {
    projectsDropdown.classList.toggle('header__dropdown__active');
    servicesDropdown.classList.remove('header__dropdown__active');
    projectsBtn.classList.toggle('header__item__active');
    servicesBtn.classList.remove('header__item__active');
})

servicesBtn.addEventListener('mouseenter', () => {
    servicesDropdown.classList.toggle('header__dropdown__active');
    projectsDropdown.classList.remove('header__dropdown__active');
    servicesBtn.classList.toggle('header__item__active');
    projectsBtn.classList.remove('header__item__active');
})

document.addEventListener('click', (e) => {
    if (e.target != servicesDropdown && e.target != projectsDropdown) {
        servicesDropdown.classList.remove('header__dropdown__active');
        projectsDropdown.classList.remove('header__dropdown__active');
        servicesBtn.classList.remove('header__item__active');
        projectsBtn.classList.remove('header__item__active');
    }
})

///// call button modal window \\\\\
const callModalBtn = document.querySelector('.header__call');
const closeModalBtn = document.querySelector('.modal__close');

const modal = document.querySelector('.modal__background');

callModalBtn.addEventListener('click', () => {
    modal.classList.add('modal--active');
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
})

///// modal input validation \\\\\
const modalInput = document.querySelector('.modal__input');
const modalPlaceholder = document.querySelector('.modal__placeholder');
const modalBtn = document.querySelector('.modal__btn');

const im = new Inputmask("+7 999 999-99-99", {
  autoUnmask: true,
  showMaskOnHover: false
});

im.mask(modalInput);

modalInput.addEventListener('focus', () => {
    modalPlaceholder.classList.add('modal__placeholder--active');
})

modalInput.addEventListener('blur', () => {
    if (!modalInput.value) {
        modalPlaceholder.classList.remove('modal__placeholder--active');
        modalPlaceholder.textContent = 'Телефон';
        modalPlaceholder.style.color = '#777777';
        modalInput.classList.remove('modal__input--error');
    }
})

modalBtn.addEventListener('click', () => {
    if (modalInput.value) {
        if (modalInput.value.length == 10) {
            modalPlaceholder.textContent = 'Телефон';
            modalInput.classList.remove('modal__input--error');
            modalPlaceholder.style.color = '#777777';
        } else {
            modalPlaceholder.textContent = 'Некорректный номер телефона';
            modalInput.classList.add('modal__input--error');
            modalPlaceholder.style.color = '#FF0000';
        }
    }
})