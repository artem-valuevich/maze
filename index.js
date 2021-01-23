import pathFinder from "./pathFinder.js"

const x = false;
const o = true;

const maze = [
    [x, x, x, x, o],
    [x, x, x, x, x],
    [o, o, o, o, x],
    [x, x, x, o, x],
    [x, x, x, o, x],
];

const entry = {
    x: 0,
    y: 2
}

const array = [
    [x, x, x, x, x],
    [o, o, o, o, x],
    [x, x, x, o, x],
]

console.log(Number.isInteger(true))
console.log(pathFinder(maze, entry))


// pathFinder(maze, entry, "right")


