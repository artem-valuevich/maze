export default function(maze) {
    for (let i = 0; i < maze.length; i++) {
        const line = maze[i];

        if (i===0 || i=== maze.length-1) { 
            for (let i = 0; i < line.length; i++)
             {if(line[i]) return true;}
        }

        else {
            if(line[0]) return true;
            if(line[line.length-1]) return true;
        }
    }
    return false;
}