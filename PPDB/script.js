const container = document.querySelector(".container");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");

document.querySelector(".switch-to-login").addEventListener("click", () => {
    container.classList.add("swap");
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
});

document.querySelector(".switch-to-register").addEventListener("click", () => {
    container.classList.remove("swap");
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});