var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { Login } from "../models/login/login.js";
import { TokenView } from "../views/token-view.js";
export class LoginController {
    constructor() {
        this.tokenView = new TokenView();
    }
    logar() {
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
            .then((data) => {
            this.tokenView.update(data.token);
        })
            .catch(e => {
            console.log(e);
            this.tokenView.update("Falha no login.");
        });
    }
}
__decorate([
    domInjector("#email-input")
], LoginController.prototype, "emailInput", void 0);
__decorate([
    domInjector("#senha-input")
], LoginController.prototype, "senhaInput", void 0);
