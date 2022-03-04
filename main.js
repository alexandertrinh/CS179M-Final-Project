

window.onload = function makeGrid() {

    let table = document.getElementById("grid");

    for (let i = 1; i <= 10; i++) {
        
        let row = document.createElement("div");
        row.id = "row-" + i;

        table.appendChild(row);
        let row_x = document.getElementById("row-" + i);

        for (let j = 1; j <= 12; j++) {
            let cell = document.createElement("div");
            cell.id = "cell-" + i + "-" + j;

            row_x.appendChild(cell);
        }
    }

    console.log('grid loaded');

    let tbl = document.getElementById("buffer-grid");

    for (let i = 1; i <= 4; i++) {
        
        let buf_row = document.createElement("div");
        buf_row.id = "buffer-grid-row-" + i;

        tbl.appendChild(buf_row);
        let row_y = document.getElementById("buffer-grid-row-" + i);

        for (let j = 1; j <= 24; j++) {
            let buf_cell = document.createElement("div");
            buf_cell.id = "buffer-grid-cell-" + i + "-" + j;

            row_y.appendChild(buf_cell);
        }
    }

    console.log('buffer grid loaded');
}

