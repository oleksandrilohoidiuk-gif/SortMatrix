const numbers = [
   [56,17,86],
   [53,59,48],
   [62,71,89]
];

for (let i = 0; i < numbers.length; i++){
    for (let start = 0; start < numbers[i].length; start++){

        console.log(`${i + 1} ${start + 1} = ${numbers[i][start]}`);
    }
}