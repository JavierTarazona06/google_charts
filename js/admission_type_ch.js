google.charts.load('current', {'packages':['table']});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_univ_adm_post = [
    {'university': 'UNAL', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'university': 'UNIANDES', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Universidad", dataList_univ_adm_post, 'university', 'uni', 'post');
});

var dataList_univ_adm_win = [
    {'university': 'UNAL', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'university': 'UNIANDES', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Universidad", dataList_univ_adm_win, 'university', 'uni', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_adm_post = [
    {'country': 'Mexico', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'country': 'Canadá', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
    {'country': 'Francia', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("País", dataList_country_adm_post, 'country', 'cou', 'post');
});

var dataList_country_adm_win = [
    {'country': 'Mexico', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'country': 'Canadá', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
    {'country': 'Francia', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("País", dataList_country_adm_win, 'country', 'cou', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_adm_post = [
    {'region': 'Uniandes', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'region': 'Norteamérica', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Región", dataList_region_adm_post, 'region', 'reg', 'post');
});

var dataList_region_adm_win = [
    {'region': 'Asia', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'region': 'Europa', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Región", dataList_region_adm_win, 'region', 'reg', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_adm_post = [
    {'year': '2023', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'year': '2024', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Año", dataList_yea_adm_post, 'year', 'yea', 'post');
});

var dataList_yea_adm_win = [
    {'year': '2023', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'year': '2024', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Año", dataList_yea_adm_win, 'year', 'yea', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_adm_post = [
    {'semester': '1', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'semester': '2', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Semestre", dataList_sem_adm_post, 'semester', 'sem', 'post');
});

var dataList_sem_adm_win = [
    {'semester': '1', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'semester': '2', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_adm("Semestre", dataList_sem_adm_win, 'semester', 'sem', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function drawTable_adm(call_field, dataList, dataList_call_field, div_call_name, div_extra) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', call_field);
    data.addColumn('number', 'Regular');
    data.addColumn('number', 'PAES');
    data.addColumn('number', 'PEAMA');

    for (var i = 0; i < dataList.length; i++) {
        var row = [
            dataList[i][dataList_call_field],
            dataList[i]['REGUL'],
            dataList[i]['PAES'],
            dataList[i]['PEAMA']
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

    var table = new google.visualization.Table(document.getElementById(`table_div_${div_call_name}_adm_${div_extra}`));

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