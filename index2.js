const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortBubble(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let a = 0; a < len - 1; a++) {
            if (arr[a] > arr[a + 1]) {
                let t = arr[a];
                arr[a] = arr[a + 1];
                arr[a + 1] = t;
            }
        }
    }
}

let array = [7, 13, 5, 3, 0, 20, 6, 27, 33, 15, 1, 4];

rl.question('Вивести відсортований (s) масив чи несортований (u)? (s/u): ', (answer) => {
    if (answer.toLowerCase() === 's') {
        sortBubble(array);
        console.log("Відсортований масив: " + array);
    } else if (answer.toLowerCase() === 'u') {
        console.log("Несортований масив: " + array);
    } else {
        console.log("Оберіть 's' чи 'u'.");
    }

    rl.close();
});