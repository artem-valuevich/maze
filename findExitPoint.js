export default function(maze) {
    const arrayOfExits = [];
    for (let y = 0; y < maze.length; y++) {
        const line = maze[y];

        if (y === 0 || y === maze.length-1) { 
            for (let x = 0; x < line.length; x++) {
                if(Number.isInteger(line[x])) arrayOfExits.push({x, y, weight: line[x]});
            }
        }

        else {
            if(Number.isInteger(line[0])) arrayOfExits.push({
                y,
                x: 0, 
                weight: line[0] 
            });
            if(Number.isInteger(line[line.length-1])) arrayOfExits.push({y, x: line.length - 1, weight: line[line.length-1]});
        }
    }
    arrayOfExits.sort((a, b) => a.weight - b.weight)

    if(arrayOfExits[0].weight === 0) return arrayOfExits[1] 

    return arrayOfExits[0]

    
}