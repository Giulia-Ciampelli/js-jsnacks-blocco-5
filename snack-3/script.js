const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

numbers.forEach(num => {
    let result = num + 1;
    console.log(result);
});

// correzione: in un nuovo array, quindi map
const numPlusOne = numbers.map(num=> {
    let result = num + 1;
    // o ++num;
    return result;
})

console.log(numPlusOne);