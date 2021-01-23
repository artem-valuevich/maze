import pathFinder from "./pathFinder.js"

const x = false;
const o = true;

const maze = [
    [x, o, o, o, o],
    [o, o, o, o, o],
    [x, x, x, x, x],
    [x, o, o, o, o],
    [x, x, x, x, x],
];

const entry = {
    x: 1,
    y: 0
}

console.log(pathFinder(maze, entry))



