export class View {
    update(model) {
        this.elemento.innerHTML = this.template(model).replace(/<script>[\s\S]*?<\/script>/g, "");
    }
}
