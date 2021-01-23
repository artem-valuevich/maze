export default function backTrack(maze, {x, y}, path = []) {
    const RIGHT = {cell: maze[y]?.[x+1], coordinates: {y, x: x+1}};
    const UP    = {cell: maze[y-1]?.[x], coordinates: {y: y-1, x}};
    const LEFT  = {cell: maze[y]?.[x-1], coordinates: {y, x: x-1}};
    const DOWN  = {cell: maze[y+1]?.[x], coordinates: {y: y+1, x}};
    const directions = [UP, RIGHT, LEFT, DOWN];
    const CURRENT = {cell: maze[y][x], coordinates: {y, x}};

    path.unshift(CURRENT.coordinates)
    
    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (direction.cell === CURRENT.cell - 1) {
              
              backTrack(maze, direction.coordinates, path)
        } else {
            continue;
        }  
    }
    
    return path;
}