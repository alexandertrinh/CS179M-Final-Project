

window.onload = function makeGrid() {

    let table = document.getElementById("grid");

    for (let i = 1; i <= 10; i++) {
        
        let row = document.createElement("tr");
        row.id = "row-" + i;

        table.appendChild(row);
        let row_x = document.getElementById("row-" + i);

        for (let j = 1; j <= 12; j++) {
            let cell = document.createElement("td");
            cell.id = "cell-" + i + "-" + j;

            row_x.appendChild(cell);
        }
    }

    console.log('The Script will load now.');
}


