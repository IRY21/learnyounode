const argc = process.argv.length;
let sum = 0;

for (let i = 2; i < argc; i++) {
    sum += +process.argv[i];
}

console.log(sum);