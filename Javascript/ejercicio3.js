//********************Ejercicio de prueba 3***************************
//Dado un array de enteros, retorna la suma de los elemmentos del array

// Caso de prueba 1
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

// Caso de prueba 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]

// Caso de prueba 3
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

var myInputArray3 = [1,2,3,4];
var myOutputArray3 = [];

    var proof2 = (array5, array6) => {
        var z = 0;
        for(var j = 0; j <= array5.length-1; j++){
            z = 0;
            for(var k = j; k >= 0; k--){
                z = z + array5[k];
            }
            array6.push(z);
        }
        console.log(array6);
    }

proof2(myInputArray3, myOutputArray3);