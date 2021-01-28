//**************Ejercicio de prueba 2 (usando ternario)********************
//Convertir un número en una cadena que contenga sonidos de gotas de agua correspondientes a ciertos factores potenciales.

function plicPlacPloc() {  
    for(var i = 1; i <= 100; i++){
        (i % 3 == 0 && i % 5 == 0)
            ? console.log("PlicPlac")
            :(i % 5 == 0 && i % 7 == 0)
                ? console.log("PlacPloc")
                :(i % 3 == 0 && i % 7 == 0)
                    ? console.log("PlicPloc")
                    :(i % 3 == 0)
                        ? console.log("Plic")
                        :(i % 5 == 0)
                            ?console.log("Plac")
                            :(i % 7 == 0)
                                ?console.log("Ploc")
                                :console.log(i);  
    }    
}

plicPlacPloc();