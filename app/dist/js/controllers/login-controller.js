var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { Login } from "../models/login/login.js";
export class LoginController {
    logar() {
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
__decorate([
    domInjector("#email-input")
], LoginController.prototype, "emailInput", void 0);
__decorate([
    domInjector("#senha-input")
], LoginController.prototype, "senhaInput", void 0);
