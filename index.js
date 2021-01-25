import pathFinder from "./pathFinder.js"

const x = false;
const o = true;

const maze = [
    [x, x, o, x, o],
    [x, o, o, o, x],
    [x, o, x, o, x],
    [x, o, o, o, x],
    [x, x, o, x, x],
];

const entry = {
    x: 2,
    y: 0
}

console.log(pathFinder(maze, entry))



