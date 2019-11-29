function buildTable(wordList) {

    console.log(wordList, 'from buildTable');
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    const enCell = document.createElement('td');
    enCell.textContent = 'English';
    const koCell = document.createElement('td');
    koCell.textContent = 'Korean';
    headRow.appendChild(enCell);
    headRow.appendChild(koCell);
    table.appendChild(headRow);
    console.log(table);

    for (let i = 0; i < wordList.length; i++) {
        const row = document.createElement('tr');
        row.ind = i;
        const cell1 = document.createElement('td');
        cell1.innerHTML = wordList[i].en;
        row.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.textContent = wordList[i].ko;
        row.appendChild(cell2);
        table.appendChild(row);
    }

    return table;
}

export default buildTable;
