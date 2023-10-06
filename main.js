const booleano1 = true
const booleano2 = false

const booleanoAnd = booleano1 && booleano2
const booleanoOr = booleano1 || booleano2
const booleanoNot = booleano1 != true
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (booleano1 != booleano2))

//2
const A = 9
const B = "9"
if (A == B) {
    console.log("Son iguales")
}
// con === no seran iguales

const mochila = ["lapiz", "book", "iphone", "laptop", "Agenda", "chocolate"]
switch (true) {
    case mochila.length > 10:
        console.log("No puedo cargar con tantas cosas")
        break;
    case mochila.length >= 2:
        console.log("Que bien voy con mi mochila")
        break;
    default:
        console.log("Creo q no necesito una mochila")
}

const diaFestivo = true
const esFestivo = diaFestivo == true ? "Hoy no trabajo" : "Hoy tabajo"
console.log(esFestivo)

//test 1

let ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["mouse", "touchPad"],
    almacenamiento: {
        discos: ["SSD", "HDD"],
        maestro: 0
    }
}
if (typeof ordenador === "object") {
     console.log("apruebas-1");
     } else {
     console.log("suspendes");
     }

// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas-2");
     } else {
     console.log("suspendes");
     }

// TEST 3
 if (ordenador.tipo === "portátil") {
     console.log("apruebas-3");
     } else {
     console.log("suspendes");
     }

// TEST 4
 if (ordenador.perifericos[1] === "touchPad") {
     console.log("apruebas-4");
     } else {
     console.log("suspendes");
     }     

// TEST 5

 if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
     console.log("apruebas-5");
     } else {
     console.log("suspendes");
     }

// TEST 6
 if (ordenador.almacenamiento.maestro === 0) {
     console.log("apruebas-6");
     } else {
     console.log("suspendes");
     }

/////////////////////////////////////////////////////////////////


// TEST 1

let arr = [
    {name:"pepito"},
    {name:"pepito"},
    {cewew:"kk"}
]

if (typeof arr === "object" && arr.length >= 0) {
console.log("apruebas1");
} else {
console.log("suspendes");
}


// TEST 2

if (typeof arr[0] === "object") {
    console.log("apruebas2");
    } else {
    console.log("suspendes");
    }

 // TEST 3

if (typeof arr[1] === "object") {
    console.log("apruebas3");
    } else {
    console.log("suspendes");
    }    

// TEST 4

if (typeof arr[2] === "object") {
    console.log("apruebas4");
    } else {
    console.log("suspendes");
    }

// TEST 5
if (arr.length === 3) {
    console.log("apruebas5");
    } else {
    console.log("suspendes");
    }

// TEST 6 aprobado pero no se porque.
if (arr[0].name === arr[1].name) {
    console.log("apruebas6");
    } else {
    console.log("suspendes");
    }

// TEST 6
if (arr[1].name === "pepito") {
    console.log("apruebas6b");
    } else {
    console.log("suspendes");
    }
    
// TEST 7
arr = [
     {age: 25},
     {age: 5},
     {age: 2}
]

if (arr[1].age > arr[2].age) {
    console.log("apruebas7");
    } else {
    console.log("suspendes");
    }

// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas8");
    } else {
    console.log("suspendes");
    }


// TEST 9

arr = ["abc", "def", {name: "this is string"}]

if (typeof arr[2].name === "string") {
    console.log("apruebas9");
    } else {
    console.log("suspendes");
    }   


// TEST 10
arr = ["abc", "def", {name: ["J", "M"]}]
if (arr[2].name[0] === "J") {
    console.log("apruebas10");
    } else {
    console.log("suspendes");
    }    
