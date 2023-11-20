document.addEventListener("DOMContentLoaded", function() {
  
    const table1Data = [
        { 'Index': 'A1', 'Value': '41'},
        { 'Index': 'A2', 'Value': '18'},
        { 'Index': 'A3', 'Value': '21'},
        { 'Index': 'A4', 'Value': '63'},
        { 'Index': 'A5', 'Value': '2'},
        { 'Index': 'A6', 'Value': '53'},
        { 'Index': 'A7', 'Value': '5'},
        { 'Index': 'A8', 'Value': '57'},
        { 'Index': 'A9', 'Value': '60'},
        { 'Index': 'A10', 'Value': '93'},
        { 'Index': 'A11', 'Value': '28'},
        { 'Index': 'A12', 'Value': '3'},
        { 'Index': 'A13', 'Value': '90'},
        { 'Index': 'A14', 'Value': '39'},
        { 'Index': 'A15', 'Value': '80'},
        { 'Index': 'A16', 'Value': '88'},
        { 'Index': 'A17', 'Value': '49'},
        { 'Index': 'A18', 'Value': '60'},
        { 'Index': 'A19', 'Value': '26'},
        { 'Index': 'A20', 'Value': '28'}
    ];

    // Display Table 1
    addHeaderRow('table1', ['Index #', 'Value']);
    table1Data.forEach(row => addRow('table1', row));

    // Calculate and Display Table 2
    const { alpha, beta, charlie } = calculateTable2Data(table1Data);
    addHeaderRow('table2', ['Category', 'Result']);
    addRow('table2', { 'Category': 'Alpha', 'Result': alpha });
    addRow('table2', { 'Category': 'Beta', 'Result': beta });
    addRow('table2', { 'Category': 'Charlie', 'Result': charlie });

    function calculateTable2Data(data) {
        const alpha = parseInt(data[4]['Value']) + parseInt(data[19]['Value']);
        const beta = parseInt(data[14]['Value']) / parseInt(data[6]['Value']);
        const charlie = parseInt(data[12]['Value']) * parseInt(data[11]['Value']);
        return { alpha, beta, charlie };
    }

    function addHeaderRow(tableId, headers) {
        const table = document.getElementById(tableId);
        let headerRow = table.insertRow();
        headers.forEach(headerText => {
            let headerCell = document.createElement('th');
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });
    }

    function addRow(tableId, rowData) {
        const table = document.getElementById(tableId);
        let row = table.insertRow();
        Object.values(rowData).forEach(val => {
            let cell = row.insertCell();
            cell.textContent = val;
        });
    }
});
