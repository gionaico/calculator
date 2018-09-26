class NoPersonAutor extends Error {
    constructor() {
        super("Esta persona no puede usar esta operacion");
        this.name = "NoPersonAutor";
    }
}
module.exports = NoPersonAutor;