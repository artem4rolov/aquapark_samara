const btnOrder = document.querySelector('.header__btn'),
      closeBtn = document.querySelector('.modal__close'),
      modal = document.querySelector('.modal__show'),
      modalParent = modal.querySelector('.modal');


btnOrder.addEventListener('click', () => {
    showModal();
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

modal.addEventListener('click', (e) => {
    if (e.target === modalParent) {
        closeModal();
    }
});

function showModal() {
    modal.classList.add('active');
    modal.classList.remove('disable');
    document.body.style.overflowY = 'hidden';
}

function closeModal() {
    modal.classList.add('disable');
    modal.classList.remove('active');
    document.body.style.overflowY = '';
}