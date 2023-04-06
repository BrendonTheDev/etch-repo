const container = document.getElementById("container");
const rows = document.getElementsByClassName("row");
const cells = document.getElementsByClassName("cell");


function makeRows(rowNum) {
    for (r=0; r < rowNum, r++) {
       let row = document.createElement("div");
       container.append(row).className = "row";
    }
}

function makeColumns(cellNum) {
    for (i=0; i < rows.length;i++) {
        (j=0; j < cellNum; i++) {
            let newCell = document.createElement("div");
            rows[j].append(newCell).className = "cell";
        };
    };
};

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}