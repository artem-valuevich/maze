import indexArray from "./indexArray.js"
import preCheck from "./preCheck.js"
import findExitPoint from "./findExitPoint.js"
import backTrack from "./backTrack.js";

export default function (maze, coordinates) {
    const {x, y} = coordinates;

    if(!maze[y][x]) return "Invalid entry point";
    //нужно чтоб preCheck игнорил точку входа
    maze[y][x] = false;

    if (!preCheck(maze)) return "There's no exit points";

    maze = indexArray(maze, coordinates);
    console.log(maze)
    const exit = findExitPoint(maze);

    if (!exit) return "There's no escape route"

    return backTrack(maze, exit)
}