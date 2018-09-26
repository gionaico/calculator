class NoCalculatorFunctionNameError extends Error {
  constructor() {
    super("No existeix eixa operació");
    this.name = 'NoCalculatorFunctionName';
  }
}

/* module.exports = NoCalculatorFunctionNameError; */

/* class NoPersonInlist extends Error {
  constructor() {
    super("No existeix Persona en la lista");
    this.name = "NoPersonInlist";
  }
}

class NoPersonAutor extends Error {
  constructor() {
    super("Esta persona no puede usar esta operacion");
    this.name = "NoPersonAutor";
  }
} */

module.exports = NoCalculatorFunctionNameError;
/* module.exports =  NoPersonInlist;
module.exports = NoPersonAutor; */