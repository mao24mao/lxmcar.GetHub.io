const constainer = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    constainer.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    constainer.classList.remove('active');
});