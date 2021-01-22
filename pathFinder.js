export default function pathFinder(maze, coordinates, prev)
{
    const {x, y} = coordinates;
    console.log(x, y)
    let directions = ["left", "right", "up", "down"];
    directions = directions.filter(direction => direction !== prev);

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        switch (direction) {
            case "left":
                if (maze[y]?.[x-1] === undefined) return {x, y}
                else if (maze[y][x-1] === false) break;
                else {
                    const result = pathFinder(maze, {y, x: x-1}, "right")
                    if (!result) break;
                    else return result;
                }
                
        
            case "right":
                if (maze[y]?.[x+1] === undefined) return {x, y}
                else if (maze[y][x+1] === false) break;
                else {
                    const result = pathFinder(maze, {y, x: x+1}, "left")
                    if (!result) break;
                    else return result;
                }

            case "up":
                if (maze[y-1]?.[x] === undefined) return {x, y}
                else if (maze[y-1][x] === false) break;
                else {
                    const result = pathFinder(maze, {y: y-1, x}, "down")
                    if (!result) break;
                    else return result;
                }

            case "down":
                if (maze[y+1]?.[x] === undefined) return {x, y}
                else if (maze[y+1][x] === false) break;
                else {
                    const result =  pathFinder(maze, {y: y+1, x}, "up")
                    if (!result) break;
                    else return result;
                }
}
    }
    return
}