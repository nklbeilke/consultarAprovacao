// arrays

let numeros = [10,20,30];

// acessando os elementos
console.log("Primeiro Elemento: ", numeros[0]);
console.log("Segundo Elemento: ", numeros[1]);
console.log("Terceiro Elemento: ", numeros[2]);

// adicionando elementos
numeros.push(40); //adiciona no final do array
numeros.unshift(5); //adiciona no inicio do array
console.log("Array após adições: ", numeros);

// removendo elementos
numeros.pop(); //remove o ultimo valor
numeros.shift(); //remove o primeiro valor
console.log("Array após remoções: ", numeros)