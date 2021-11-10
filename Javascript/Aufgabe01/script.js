for (var i = 0; i < 2; i++) {
    console.log("X X X X");
    console.log("O O O O");
}

var result = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        result += i;
    }
}
console.log(result);


console.log("X X X");

for (var i = 1; i <= 4; i++) {
    console.log("X     X" + i );
}

console.log("X X X");