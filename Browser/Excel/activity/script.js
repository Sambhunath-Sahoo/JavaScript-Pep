

// click on add button
let btnContainer = document.querySelector(".add-sheet_btn-container");
let sheetList = document.querySelector(".sheet-list");
btnContainer.addEventListener("click", function() {
    // get last sheet index numebr to create new sheet
    let Allsheets = document.querySelectorAll(".sheet");
    let lastsheet = Allsheets[Allsheets.length-1];
    let lastIdx = lastsheet.getAttribute("idx");
    lastIdx = Number(lastIdx);

    // create new sheet
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("idx", `${lastIdx+1}`);
    newSheet.innerText = `sheet ${lastIdx+2}`;

    // append newsheet into 
    sheetList.appendChild(newSheet);
    // move active state to newsheet
    for(let i=0; i<Allsheets.length; i++) {
        Allsheets[i].classList.remove("active");
    }
    newSheet.classList.add("active");
})