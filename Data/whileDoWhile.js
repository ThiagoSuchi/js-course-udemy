function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 5;
const max = 50;
let rand = random(min, max)

while(rand !== 25) {
    rand = random(min, max)
    console.log(rand);
}

// Com Do While
console.log('-----------------------------------------------------------');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);