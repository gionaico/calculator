class NoPersonInlist extends Error {
    constructor() {
        super("No existeix Persona en la lista");
        this.name = "NoPersonInlist";
    }
}
module.exports =  NoPersonInlist;