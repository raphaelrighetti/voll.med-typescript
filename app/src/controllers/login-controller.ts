import { domInjector } from "../decorators/dom-injector.js";
import { Login } from "../models/login/login.js";

export class LoginController {
    @domInjector("#email-input")
    private emailInput: HTMLInputElement;

    @domInjector("#senha-input")
    private senhaInput: HTMLInputElement;

    public logar() {
        const login = new Login(this.emailInput.value, this.senhaInput.value);

        fetch("http://localhost:8083/login", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(login),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e));
    }
}
