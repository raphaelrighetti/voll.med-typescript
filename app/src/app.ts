import { LoginController } from "./controllers/login-controller.js";

const loginController = new LoginController();

const form = document.querySelector(".form") as HTMLFormElement;

form.addEventListener("submit", e => {
    e.preventDefault();
    loginController.logar();
});
