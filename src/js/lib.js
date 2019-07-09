let datos = Array(20).fill().map(item => Math.random().toFixed(2));

let funcion = dato => console.log(dato);

let modListener = (function () {

    // let _func = [
    //     () => { console.log("MotherFucker 1 !!!!!!!") },
    //     () => { console.log("MotherFucker 2 !!!!!!!") },
    //     () => { console.log("MotherFucker 3 !!!!!!!") },
    // ]

    // let  _q=[".navbar",".card-img img",".card-text"];
/*     let _q = [];
    let elem;

    let _elem=function(){

        elem= _q.map(item => document.querySelector(item));


    }  */

    // let [_q1,_q2,_q3]=_l;

/*     let funciones=function(...args) {

        elem.forEach((item, i) => {
            item.addEventListener("click", args[i])
        })
    }; */
    

/*     let setSelectors=function (...args) {
        _q.push(...args);
        _elem();
        
    };
    let getSelectors=function () {
        console.log(_q)
        return _q
    };
    let getElements=function () {
        console.log(elem)
        return elem;
    }; */


    let Instancia=function() {
        this._q = [];
        this.elem;
        this._elem=function(){

            this.elem =this. _q.map(item => document.querySelector(item));


        } 
     
        this.setSelectors = function (...args) {
           this. _q.push(...args);
           this. _elem();

        };
        this.getSelectors = function () {
            console.log(this._q)
            return this._q
        };
        this.getElements = function () {
            console.log(this.elem)
            return this.elem;
        };
        this.funciones = function (...args) {

            this.elem.forEach((item, i) => {
                item.addEventListener(args[i].evento, args[i].manejador)
            })
        };


    }

    return {
        createInstancia:function() {
            return new Instancia()
        }
        
    }



})()


export { datos, funcion, modListener};
// export let lib = {
//     funcion: funcion,
//     datos: datos
// }