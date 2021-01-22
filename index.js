import pathFinder from "./pathFinder.js"

const x = false;
const o = true;

const maze = [
    [x, x, x, x, x],
    [x, o, x, o, x],
    [o, o, x, o, x],
    [x, o, o, o, x],
    [x, x, x, o, x],
];

const entry = {
    x: 0,
    y: 2
}

console.log(pathFinder(maze, entry, "left"))

// pathFinder(maze, entry, "right")


