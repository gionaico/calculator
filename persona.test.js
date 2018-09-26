let person = {
    julia: ["fMultiplier"],
    paco: ["fDoublefier"],
    david: ["fAdd"],
    lucas: ["fMultiplier", "fAdd"],
    ana: ["fMultiplier", "fDoublefier", "fAdd"]
};
const persona = require("./persona.class");

test("Persona no existe", () => {
    /* let o=new persona("4646"); */
    expect(persona("paco")).toThrow("NoPersonInlist");
});
