google.charts.load('current', {'packages':['table']});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_univ_stu_post = [
    {'university': 'UNAL', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'university': 'UNIANDES', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Universidad", dataList_univ_stu_post, 'university', 'uni', 'post');
});

var dataList_univ_stu_win = [
    {'university': 'UNAL', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'university': 'UNIANDES', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Universidad", dataList_univ_stu_win, 'university', 'uni', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_stu_post = [
    {'country': 'Mexico', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'country': 'Canadá', 'PRE': 70, 'POS': 70, 'DOC': 100},
    {'country': 'Francia', 'PRE': 100, 'POS': 80, "DOC": 70},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("País", dataList_country_stu_post, 'country', 'cou', 'post');
});

var dataList_country_stu_win = [
    {'country': 'Mexico', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'country': 'Canadá', 'PRE': 30, 'POS': 20, 'DOC': 40},
    {'country': 'Francia', 'PRE': 50, 'POS': 40, "DOC": 35},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("País", dataList_country_stu_win, 'country', 'cou', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_stu_post = [
    {'region': 'Uniandes', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'region': 'Norteamérica', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Región", dataList_region_stu_post, 'region', 'reg', 'post');
});

var dataList_region_stu_win = [
    {'region': 'Asia', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'region': 'Europa', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Región", dataList_region_stu_win, 'region', 'reg', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_stu_post = [
    {'year': '2023', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'year': '2024', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Año", dataList_yea_stu_post, 'year', 'yea', 'post');
});

var dataList_yea_stu_win = [
    {'year': '2023', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'year': '2024', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Año", dataList_yea_stu_win, 'year', 'yea', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_stu_post = [
    {'semester': '1', 'PRE': 100, 'POS': 80, "DOC": 70},
    {'semester': '2', 'PRE': 70, 'POS': 70, 'DOC': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Semestre", dataList_sem_stu_post, 'semester', 'sem', 'post');
});

var dataList_sem_stu_win = [
    {'semester': '1', 'PRE': 50, 'POS': 40, "DOC": 35},
    {'semester': '2', 'PRE': 30, 'POS': 20, 'DOC': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_stu("Semestre", dataList_sem_stu_win, 'semester', 'sem', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function drawTable_stu(call_field, dataList, dataList_call_field, div_call_name, div_extra) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', call_field);
    data.addColumn('number', 'Pregrado');
    data.addColumn('number', 'Maestría');
    data.addColumn('number', 'Doctorado');

    for (var i = 0; i < dataList.length; i++) {
        var row = [
            dataList[i][dataList_call_field],
            dataList[i]['PRE'],
            dataList[i]['POS'],
            dataList[i]['DOC']
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

    var table = new google.visualization.Table(document.getElementById(`table_div_${div_call_name}_stu_${div_extra}`));

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