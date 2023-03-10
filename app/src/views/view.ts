export abstract class View<T> {
    protected elemento: HTMLElement;

    protected abstract template(model: T): string;

    public update(model: T): void {
        this.elemento.innerHTML = this.template(model).replace(
            /<script>[\s\S]*?<\/script>/g,
            ""
        );
    }
}
