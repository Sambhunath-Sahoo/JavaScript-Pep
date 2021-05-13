// creating left column (1, 2, 3, 4, ...., 99, 100)
let leftCol = document.querySelector(".left_col");
let rows = 100;
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div");
    colBox.innerText = i + 1;
    colBox.setAttribute("class", "box");
    leftCol.appendChild(colBox);
}



// creating top row (A, B, C ..... , Y, Z)
let topRow = document.querySelector(".top_row");
let cols = 26;
for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = String.fromCharCode(65 + i);
    // setAttribute
    cell.setAttribute("class", "cell");
    topRow.appendChild(cell);
}



// create Grid
let grid = document.querySelector(".grid");
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");                            /*create a whole row element  |_____________________________________|*/
    row.setAttribute("class", "row");           
    for (let j = 0; j < cols; j++) {                
        let cell = document.createElement("div");                       /*creating a cell element*/
        cell.innerText=`${String.fromCharCode(65 + j)}  ${i+1}`;        /*creating a cell element*/
        cell.setAttribute("class", "cell");
        row.appendChild(cell);                                          /*inserting a cell in to the row  |__|___|___|___|___|___|__|*/
    }
    grid.appendChild(row);                                              /*inserting whole row into the grid*/
}