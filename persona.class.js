let person = {
    julia: ["fMultiplier"],
    paco: ["fDoublefier"],
    david: ["fAdd"],
    lucas: ["fMultiplier", "fAdd" ],
    ana: ["fMultiplier", "fDoublefier", "fAdd"]
};

const NoPersonInlist = require("./customExceptions2");
const e3 = require("./customExceptions3");

class Persona extends Error {
    constructor(name) {
        super();
        this.name = name;
    }

    checkName() {
        if (person.hasOwnProperty(this.name)){
            console.log(person.hasOwnProperty(this.name))
        } else{
            console.log("entra");
            throw new e2(); 

        }
    }

    checkOp(op){
        if (!person[this.name].includes(op)) throw new e3(); 
        console.log(person[this.name].includes(op));
    }
}

/*
  PARA poder ejecutar calculator antes hay que comprobar que tipo de la clase persona  (si existe y si tiene permiso de operar con calcularor con unas funciones u otras)
*/
let c = function(n) {
   return (person.hasOwnProperty(n))
}

let oper={
    c: c
}

function op(n) {
    /* let pers=new Persona(n); */
    /* if (typeof fOperation !== "function") throw new NoCalculatorFunctionNameError();  */
    console.log(person.hasOwnProperty(n));
    if (person.hasOwnProperty(n)){
        console.log(person.hasOwnProperty(n));
        return oper["c"](n);
    }else{
        throw new NoPersonInlist(); 
    } 
}

module.exports = op;
