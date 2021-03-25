let globalSize;
function createBoard(size) {
    let board = [];
    for(r=0; r<size; r++) {
        let row = [];
        for(c=0; c<size; c++) {
            row.push(c);
        }
        board.push(row);
    }
    globalSize = size;
    return board;
};

let board = document.querySelector('.board')

// console.log(createBoard(10))

createBoard(10).forEach(row => {
    cells = '';
    row.forEach(cell => {
        cells += `<div style="width: ${700/globalSize}px; height: ${700/globalSize}px;" class="cell" id"${cell}">${cell}</div>`
    });
    board.innerHTML += `<div class="row">${cells}</div>`
})


let snake = document.getElementById('snake')
snake.style.left = `0`


// function movement() {
    //     for(i=1; i<globalSize; i++) {
        //         left += 700/globalSize;
        //         console.log(left)
        //         nake.style.left = `${left}px`
        //     }
        // while(left !== 700 - 700/globalSize) {
            //     left += 700/globalSize 
            //     // snake.style.left = `${left}px`
            //     console.log(left)
            // }
        // }
        // movement()
let left = 0;
let cellTop = 0;
let i = 1;
let j = 1;
let cellsID;
let cellID;
// let rowInterval = setInterval(() => {
//     if(j<globalSize) {
        
//     } else {
//         clearInterval(rowInterval)
//     }
// }, 100);



cellsID = document.querySelectorAll('.cell');
let cellInterval = setInterval(() => {
    if(i<globalSize) {
            left += 700/globalSize;
            console.log(left, i, j)
            snake.style.left = `${left}px`
            // cellsID = document.getElementById(`${i-1}`);
            // console.log(cellsID)
            if (cellsID[(i-2+((j*10)-10))]) {cellsID[(i-2+((j*10)-10))].style.color = '#d6e0f5'}
            cellsID[(i-1+((j*10)-10))].style.color = 'rgb(214, 224, 245)'
            i++;

    } else {
        if(j<globalSize) {
            cellsID[(i-2+((j*10)-10))].style.color = '#d6e0f5'
            cellsID[(i-1+((j*10)-10))].style.color = '#aec8ff0a'
            i = 1;
            left = 0;
            cellTop += 700/globalSize;
            snake.style.left = `${left}px`
            snake.style.top = `${cellTop}px`
            j++
        } else {
            cellsID[(i-2+((j*10)-10))].style.color = '#d6e0f5'
            cellsID[(i-1+((j*10)-10))].style.color = '#aec8ff0a'
            clearInterval(cellInterval);
        }
    }

}, 1000/24);