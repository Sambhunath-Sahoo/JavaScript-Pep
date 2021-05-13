let btnContainer = document.querySelector(".add-sheet_btn-container");
let sheetList = document.querySelector(".sheet-list");

// to make firstSheet active when clicked
let firstSheet = document.querySelector(".sheet");
firstSheet.addEventListener("click", makeMeActive);

btnContainer.addEventListener("click", function () {
    // get last sheet index number to create new sheet
    let AllSheets = document.querySelectorAll(".sheet");
    let lastSheet = AllSheets[AllSheets.length - 1];
    let Lastidx = lastSheet.getAttribute("idx");
    Lastidx = Number(Lastidx);

    // create new sheet
    let Newsheet = document.createElement("div");
    Newsheet.setAttribute("class", "sheet");
    Newsheet.setAttribute("idx", `${Lastidx + 1}`);
    Newsheet.innerText = `Sheet ${Lastidx + 2}`;

    if (AllSheets.length < 15) {
        // append newsheet into 
        sheetList.appendChild(Newsheet);
        // move active state to newsheet
        for (let i = 0; i < AllSheets.length; i++) {
            AllSheets[i].classList.remove("active");
        }
        Newsheet.classList.add("active");
    } else {
        alert("more than 15 sheets are not allow");
    }

    // attach a "addEventListener" on every new sheet to do operation(active) 
    Newsheet.addEventListener("click", makeMeActive)
})


// function to make active when user clicked on the sheet
function makeMeActive(e) {
    let sheet = e.currentTarget;
    let AllSheets = document.querySelectorAll(".sheet");
    for (let i = 0; i < AllSheets.length; i++) {
        AllSheets[i].classList.remove("active");
    }
    sheet.classList.add("active");
}


