export default function indexArray(maze, coordinates, deep = 0)
{
    const {x, y} = coordinates;

    const RIGHT = {cell: maze[y]?.[x+1], coordinates: {y, x: x+1}};
    const UP    = {cell: maze[y-1]?.[x], coordinates: {y: y-1, x}};
    const LEFT  = {cell: maze[y]?.[x-1], coordinates: {y, x: x-1}};
    const DOWN  = {cell: maze[y+1]?.[x], coordinates: {y: y+1, x}};
    const directions = [UP, RIGHT, LEFT, DOWN];

    maze[y][x] = deep;

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (!direction.cell) {
            continue;  
        } else if (Number.isInteger(direction.cell) && direction.cell < maze[y][x]) {
            continue;
        } else {
            indexArray(maze, direction.coordinates, deep + 1)
        }  
    }
    return maze;
}