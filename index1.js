const readline = require('readline');

function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);

        if (arr[m] === target) {
            return m;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Напишіть елемент, який ви прагнете знайти: ', (element) => {
    if (element.trim() !== '') {
        const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = binarySearch(sortedArray, parseInt(element, 10));

        if (result !== -1) {
            console.log(`Елемент ${element} знайдено в індексі ${result}.`);
        } else {
            console.log(`Елемент ${element} не знайдено в масиві.`);
        }
    } else {
        console.log('Ви не написали жодного елементу.');
    }

    rl.close();
});