import { domInjector } from "../decorators/dom-injector.js";
import { View } from "./view.js";

export class TokenView extends View<string> {
    @domInjector("#token-field")
    protected elemento: HTMLElement;

    protected template(model: string): string {
        return model;
    }
}
