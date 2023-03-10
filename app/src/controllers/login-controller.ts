import { domInjector } from "../decorators/dom-injector.js";
import { Login } from "../models/login/login.js";
import { TokenResponse } from "../interfaces/token-response.js";
import { TokenView } from "../views/token-view.js";

export class LoginController {
    @domInjector("#email-input")
    private emailInput: HTMLInputElement;

    @domInjector("#senha-input")
    private senhaInput: HTMLInputElement;

    private tokenView = new TokenView();

    public logar() {
        const login = new Login(this.emailInput.value, this.senhaInput.value);
        let token = "Token não encontrado";

        fetch("http://localhost:8083/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        })
            .then(res => res.json())
            .then((data: TokenResponse) => {
                this.tokenView.update(data.token);
            })
            .catch(e => {
                console.log(e);
                this.tokenView.update("Falha no login.");
            });
    }
}
