google.charts.load('current', {'packages':['table']});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_univ_sex_post = [
    {'university': 'UNAL', 'males': 100, 'females': 80},
    {'university': 'UNIANDES', 'males': 70, 'females': 80},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Universidad", dataList_univ_sex_post, 'university', 'uni', 'post');
});

var dataList_univ_sex_win = [
    {'university': 'UNAL', 'males': 50, 'females': 40},
    {'university': 'UNIANDES', 'males': 30, 'females': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Universidad", dataList_univ_sex_win, 'university', 'uni', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_sex_post = [
    {'country': 'Mexico', 'males': 100, 'females': 80},
    {'country': 'Canadá', 'males': 70, 'females': 80},
    {'country': 'Francia', 'males': 70, 'females': 80},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("País", dataList_country_sex_post, 'country', 'cou', 'post');
});

var dataList_country_sex_win = [
    {'country': 'Mexico', 'males': 10, 'females': 12},
    {'country': 'Canadá', 'males': 15, 'females': 12},
    {'country': 'Francia', 'males': 12, 'females': 15},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("País", dataList_country_sex_win, 'country', 'cou', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_sex_post = [
    {'region': 'Uniandes', 'males': 100, 'females': 80},
    {'region': 'Norteamérica', 'males': 70, 'females': 80},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Región", dataList_region_sex_post, 'region', 'reg', 'post');
});

var dataList_region_sex_win = [
    {'region': 'Asia', 'males': 10, 'females': 12},
    {'region': 'Europa', 'males': 15, 'females': 12},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Región", dataList_region_sex_win, 'region', 'reg', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_sex_post = [
    {'year': '2023', 'males': 100, 'females': 80},
    {'year': '2024', 'males': 70, 'females': 80},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Año", dataList_yea_sex_post, 'year', 'yea', 'post');
});

var dataList_yea_sex_win = [
    {'year': '2023', 'males': 10, 'females': 12},
    {'year': '2024', 'males': 15, 'females': 12},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Año", dataList_yea_sex_win, 'year', 'yea', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_sex_post = [
    {'semester': '1', 'males': 100, 'females': 80},
    {'semester': '2', 'males': 70, 'females': 80},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Semestre", dataList_sem_sex_post, 'semester', 'sem', 'post');
});

var dataList_sem_sex_win = [
    {'semester': '1', 'males': 10, 'females': 12},
    {'semester': '2', 'males': 15, 'females': 12},
];
google.charts.setOnLoadCallback(function() {
    drawTable_sex("Semestre", dataList_sem_sex_win, 'semester', 'sem', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function drawTable_sex(call_field, dataList, dataList_call_field, div_call_name, div_extra) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', call_field);
    data.addColumn('number', 'Masculino');
    data.addColumn('number', 'Femenino');

    for (var i = 0; i < dataList.length; i++) {
        var row = [
            dataList[i][dataList_call_field],
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

    var table = new google.visualization.Table(document.getElementById(`table_div_${div_call_name}_sex_${div_extra}`));

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