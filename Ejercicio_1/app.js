/*Ejercicio 2.1 - Algoritmos
N y M son números enteros dentro del intervalo [1, 30.000]; 
Cada elemento de los arreglos A, B, C es un número entero dentro del rango [1, 2 * M]; A [K] ≤ B [K]
*/
function solution(A, B, C){
    var final = C;
    var exit = -1; 
    var tablones = 0;
    var a = 0;
    var b = 0;

    for( var i = 0; i < final.length; i++ ){
        if(A[a] <= final[i] <= B[b]){
            tablones++;
        }
        ++a;
        ++b;
    }
    if (tablones == A.length){
        return tablones;
    }else {
        return exit;
    }
}
//Ejemplo dado: 
console.log(solution([1,4,5,8], [4,5,9,10], [4,6,7,10,2]))