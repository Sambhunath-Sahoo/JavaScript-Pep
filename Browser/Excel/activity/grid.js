let leftCol = document.querySelector(".left_col");
let topRow = document.querySelector(".top_row");
let grid = document.querySelector(".grid");
// current clicked cell address 
let addressInput = document.querySelector(".address-input");
let boldBtn = document.querySelector(".bold");
let underlineBtn = document.querySelector(".underline");
let italicBtn = document.querySelector(".italic");

// align
let alignBtns = document.querySelectorAll(".align-container>*");
// font-size
let fontSizeElem = document.querySelector(".font-size");


let rows = 100;
let cols = 26;
// creating left column (1, 2, 3, 4, ...., 99, 100)
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div");
    colBox.innerText = i + 1;
    colBox.setAttribute("class", "box");
    leftCol.appendChild(colBox);
}

// creating top row (A, B, C ..... , Y, Z)
for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = String.fromCharCode(65 + i);
    // setAttribute
    cell.setAttribute("class", "cell");
    topRow.appendChild(cell);
}

// create Grid (ui uniqely identify) -> 
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        // cell.innerText=`${String.fromCharCode(65 + j)}  ${i+1}`
        cell.setAttribute("class", "cell");
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        cell.setAttribute("contenteditable", "true");
        row.appendChild(cell);
    }
    grid.appendChild(row);
}



// defining the initial properties of every cell with a obj value in sheetDB
let sheetDB = [];
for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        let cell = {
            bold: "normal", 
            italic: "normal",
            underline: "none", 
            hAlign: "center",
            fontFamily: "sans-serif", 
            fontSize: "16",
            color: "black",
            bColor: "none"
        }
        row.push(cell);
    }
    sheetDB.push(row);
}


// event listener add click;
let allCells = document.querySelectorAll(".grid .cell");
for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function () {
        // address get current cell
        let rid = allCells[i].getAttribute("rid");
        let cid = allCells[i].getAttribute("cid");
        rid = Number(rid);
        cid = Number(cid);
        let address = `${String.fromCharCode(65 + cid)}${rid + 1}`;
        // alert(address);
        addressInput.value = address;


        let cellObject = sheetDB[rid][cid];
        // toolbar cell sync (show at the page what properties are active on cell)
        if (cellObject.bold == "normal") {
            boldBtn.classList.remove("active-btn");
        } else {
            boldBtn.classList.add("active-btn");
        }

        if (cellObject.underline == "none") {
            underlineBtn.classList.remove("active-btn");
        } else {
            underlineBtn.classList.add("active-btn");
        }

        if (cellObject.italic == "normal") {
            italicBtn.classList.remove("active-btn");
        } else {
            italicBtn.classList.add("active-btn");
        }
    })
}
allCells[0].click();



// ************font-family********************
boldBtn.addEventListener("click", function () {
    // Jispe cell click -> bold
    let uiCellElement = findUICellElement();
    let cid = uiCellElement.getAttribute("cid");
    let rid = uiCellElement.getAttribute("rid");
    let cellObject = sheetDB[rid][cid];
    if (cellObject.bold == "normal") {
        uiCellElement.style.fontWeight = "bold";
        boldBtn.classList.add("active-btn");
        cellObject.bold = "bold";
    } else {
        boldBtn.classList.remove("active-btn");
        uiCellElement.style.fontWeight = "normal";
        cellObject.bold = "normal";
    }
})

underlineBtn.addEventListener("click", function () {
    // Jispe cell click -> underline
    let uiCellElement = findUICellElement();
    let cid = uiCellElement.getAttribute("cid");
    let rid = uiCellElement.getAttribute("rid");
    let cellObject = sheetDB[rid][cid];
    if (cellObject.underline == "none") {
        uiCellElement.style.textDecoration = "underline";
        underlineBtn.classList.add("active-btn");
        cellObject.underline = "underline";
    } else {
        underlineBtn.classList.remove("active-btn");
        uiCellElement.style.textDecoration = "none";
        cellObject.underline = "none";
    }
})

italicBtn.addEventListener("click", function () {
    // Jispe cell click -> italic
    let uiCellElement = findUICellElement();
    let cid = uiCellElement.getAttribute("cid");
    let rid = uiCellElement.getAttribute("rid");
    let cellObject = sheetDB[rid][cid];
    if (cellObject.italic == "normal") {
        uiCellElement.style.fontStyle = "italic";
        italicBtn.classList.add("active-btn");
        cellObject.italic = "italic";
    } else {
        italicBtn.classList.remove("active-btn");
        uiCellElement.style.fontStyle = "normal";
        cellObject.italic = "normal";
    }
})


// *******************align-container**********************
for(let i=0; i< alignBtns.length; i++){
    alignBtns[i].addEventListener("click", function (){
        let alignmnet = alignBtns[i].getAttribute("class");
        let uiCellElement = findUICellElement();
        uiCellElement.style.textAlign = alignmnet;
    })
}

// ******************font-size*****************************
fontSizeElem.addEventListener("change",function(){
    let val = fontSizeElem.value;
    let uiCellElement = findUICellElement();
    uiCellElement.style.fontSize=val+"px";
})


function findUICellElement() {
    let address = addressInput.value;
    let ricidObj = getRIDCIDfromAddress(address);
    let rid = ricidObj.rid;
    let cid = ricidObj.cid;
    let uiCellElement = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`)
    return uiCellElement;
}
function getRIDCIDfromAddress(address) {
    let cid = Number(address.charCodeAt(0)) - 65;
    let rid = Number(address.slice(1)) - 1;
    return { "rid": rid, "cid": cid };
}
