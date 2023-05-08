function countCombinations(matrix, str){
    // console.log(matrix);

    let checkDir = str.length === 1 ? 1 : 8;
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
                
                for(let k = 0; k < checkDir; k++){
                    if(stringFound(matrix, str, i , j, k)) count++;
                }
            
        }
    }
    return count;
}


function stringFound(matrix, str, row, col, direction){
    for(let i = 0; i < str.length; i++){
        if(row < 0 || col < 0 || row > matrix.length || col > matrix[0].length) return false;
        if(matrix[row] && (matrix[row][col] !== str[i])) return false;
        switch(direction){
            case 0: col++; break;
            case 1: col--; break;
            case 2: row++; break;
            case 3: row--; break;
            case 4: col++; row++; break;
            case 5: col++; row--; break;
            case 6: col--; row--; break;
            case 7: col--; row++; break;
        }
    }
    // console.log('String found start from', row, ' ', col);
    return true;
}


//Test case cases

let matrix = [
 ['a', 'c', 'd', 'e',  'f',  's'],
 ['g', 'k',  'r', 'n',  't',  't'],
 ['n', 'u',  'i', 'a', 'o',  'a'],
 ['p',  'l',  'r', 'k',  't',  'r'],
 ['n', 's',  't', 'a',  'r',  's'],
 ['e', 'q',  't', 'o',  'r',  'p']
];


console.log(countCombinations(matrix, 'star'));
console.log(countCombinations(matrix, 's'));
