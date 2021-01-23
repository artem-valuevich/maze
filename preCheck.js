export default function(condition, maze) {
    for (let i = 0; i < maze.length; i++) {
        const line = maze[i];

        if (i===0 || i=== maze.length-1) { 
            for (let i = 0; i < line.length; i++)
             {if(typeof line[i] === condition) return true;}
        }

        else {
            if(typeof line[0] === condition) return true;
            if(typeof line[line.length-1] === condition) return true;
        }
    }
    return false;
}