import { datos as datos, funcion as func, modListener as listener }  from './lib.js';
// import * as lib  from './lib.js';


/* console.log("Hola!!!!!");

let luis=23;

console.log(luis);

console.log(datos);

func("Hola, desde el Modulo lib !!!!!!!!!!");

function pepe(val) {
    console.log(arguments)
}
pepe.argument="motherfucker";

pepe("a");

console.log(pepe.argument); */
let listener1=listener.createInstancia();

let listener2=listener.createInstancia();

listener1.setSelectors(".navbar", ".card-img img", ".card-text");
// listener.getSelectors();
// listener.getElements();

listener1.funciones({
    evento:"mouseout",
    manejador: (e) => {
        console.log("Mother Fucker 1 !!!!!!!!")
        // console.log(e.target);
    }
}, {
        evento: "click",
        manejador: (e) => {
            console.log("Mother Fucker 2 !!!!!!!!")
            // console.log(e.target)
        }
    }, {
        evento: "click",
        manejador: (e) => {
            console.log("Mother Fucker 3 !!!!!!!!")
            // console.log(e.target)
        }
    }
)
listener1.getElements();

listener2.setSelectors(".segundo img");
listener2.getElements();
listener2.funciones({
    evento: "mouseenter",
    manejador: (e) => {
        console.log("Mother Fucker Más grande !!!!!!!!")
        // console.log(e.target)
    }
}
)

console.log(listener1,listener2)








