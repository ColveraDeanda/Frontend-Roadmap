//1. Suma de dígitos

function digitsSum(inputInt){
    //Inicializar la variable que contendrá la suma de los dígitos
    let sum = 0;
    //Ciclo para realizar la suma de los dígitos hasta que el número sea 0
    while(inputInt > 0){
        //Obtener el último dígito del número
        const lastDigit = inputInt % 10;
        lastDigit
        //Sumar el último dígito al total
        sum += lastDigit;
        sum
        //Eliminar el último dígito del número
        inputInt = Math.floor(inputInt / 10);
    }
    return sum;
}

console.log(digitsSum(12345));

//2. Palíndromos

var num = 123;
let digit = num % 10;
digit



function isPalindrome(inputStr){
    //Convertir la cadena a minúsculas utilizando toLowerCase para evitar problemas con mayúsculas y minúsculas
    inputStr = inputStr.toLowerCase();
    //Se utiliza split para dividir la cadena en un array de caracteres, después se invierte el array con reverse y finalmente se une el array en una cadena con join
    let invertedStr = inputStr.split("").reverse().join("");
    //Comparar si la cadena invertida es igual a la cadena original y devolver el resultado
    return inputStr === invertedStr;

}

console.log(isPalindrome("aabaa"));

//3. Producto de elementos adyascentes

function maxAdjacentProduct(inputArray){
    //Inicializar la variable con el producto de los dos primeros elementos del array
    let maxProd = inputArray[0] * inputArray[1];
    //Ciclo para recorrer el array desde el segundo hasta el penúltimo elemento	
    for(let i = 1; i < inputArray.length - 1; i++){
        //Obtener el producto de los elementos adyacentes
        let prod = inputArray[i] * inputArray[i + 1];
        //Comparar si el producto es mayor que el máximo producto y actualizarlo si es necesario
        if(prod > maxProd){
            maxProd = prod;
        }
    }
    return maxProd;
}

console.log(maxAdjacentProduct([-23, 4, -3, 8, -12]));
