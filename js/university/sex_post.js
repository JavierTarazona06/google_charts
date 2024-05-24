google.charts.load('current', {'packages':['table']});


var dataList = [
    {'university': 'UNAL', 'males': 100, 'females': 80},
    {'university': 'UNIANDES', 'males': 70, 'females': 80},
];
google.charts.setOnLoadCallback(function() {
    drawTable(dataList);
});
//google.charts.setOnLoadCallback(drawTable);

function drawTable(dataList) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Universidad');
    data.addColumn('number', 'Masculino');
    data.addColumn('number', 'Femenino');

    /*var dataList = [
        {'university': 'UNAL', 'males': 100, 'females': 80},
        {'university': 'UNIANDES', 'males': 70, 'females': 80},
    ];*/

    for (var i = 0; i < dataList.length; i++) {
        var row = [
            dataList[i]['university'],
            dataList[i]['males'],
            dataList[i]['females']
        ];
        data.addRow(row);
    }

    for (var i = 0; i < dataList.length; i++) {
        if (i % 2 === 0) {
            data.setProperty(i, 0, 'className', 'custom-cell-first-column');
        } else {
            data.setProperty(i, 0, 'className', 'custom-cell-first-column-oddrow');
        }
    }

    var table = new google.visualization.Table(document.getElementById('table_div_uni_sex_post'));

    var options = {
        allowHtml: true,
        alternatingRowStyle: true,
        width: '100%',
        height: '100%',
        sort: 'enable',
        cssClassNames: {
            headerRow: 'custom-header',
            tableRow: 'custom-row',
            oddTableRow: 'custom-row-odd',
            selectedTableRow: 'custom-row',
            hoverTableRow: 'custom-row',
            headerCell: 'custom-cell',
            tableCell: 'custom-cell'
        }
    };

    table.draw(data, options);
}