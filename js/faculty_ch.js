google.charts.load('current', {'packages':['table']});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_univ_fac_post = [
    {'university': 'UNAL', 'Ingeniería': 100, 'Ciencias de la Salud': 80, "...": 70},
    {'university': 'UNIANDES', 'Ingeniería': 70, 'Ciencias de la Salud': 70, '...': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Universidad", dataList_univ_fac_post, 'university', 'uni', 'post');
});

var dataList_univ_fac_win = [
    {'university': 'UNAL', 'Ingeniería': 50, 'Ciencias de la Salud': 40, "...": 35},
    {'university': 'UNIANDES', 'Ingeniería': 30, 'Ciencias de la Salud': 20, '...': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Universidad", dataList_univ_fac_win, 'university', 'uni', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_fac_post = [
    {'country': 'Mexico', 'Ingeniería': 100, 'Ciencias de la Salud': 80, "...": 70},
    {'country': 'Canadá', 'Ingeniería': 70, 'Ciencias de la Salud': 70, '...': 100},
    {'country': 'Francia', 'Ingeniería': 100, 'Ciencias de la Salud': 80, "...": 70},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("País", dataList_country_fac_post, 'country', 'cou', 'post');
});

var dataList_country_fac_win = [
    {'country': 'Mexico', 'Ingeniería': 50, 'Ciencias de la Salud': 40, "...": 35},
    {'country': 'Canadá', 'Ingeniería': 30, 'Ciencias de la Salud': 20, '...': 40},
    {'country': 'Francia', 'Ingeniería': 50, 'Ciencias de la Salud': 40, "...": 35},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("País", dataList_country_fac_win, 'country', 'cou', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_fac_post = [
    {'region': 'Uniandes', 'Ingeniería': 100, 'Ciencias de la Salud': 80, "...": 70},
    {'region': 'Norteamérica', 'Ingeniería': 70, 'Ciencias de la Salud': 70, '...': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Región", dataList_region_fac_post, 'region', 'reg', 'post');
});

var dataList_region_fac_win = [
    {'region': 'Asia', 'Ingeniería': 50, 'Ciencias de la Salud': 40, "...": 35},
    {'region': 'Europa', 'Ingeniería': 30, 'Ciencias de la Salud': 20, '...': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Región", dataList_region_fac_win, 'region', 'reg', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_fac_post = [
    {'year': '2023', 'Ingeniería': 100, 'Ciencias de la Salud': 80, "...": 70},
    {'year': '2024', 'Ingeniería': 70, 'Ciencias de la Salud': 70, '...': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Año", dataList_yea_fac_post, 'year', 'yea', 'post');
});

var dataList_yea_fac_win = [
    {'year': '2023', 'Ingeniería': 50, 'Ciencias de la Salud': 40, "...": 35},
    {'year': '2024', 'Ingeniería': 30, 'Ciencias de la Salud': 20, '...': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Año", dataList_yea_fac_win, 'year', 'yea', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_fac_post = [
    {'semester': '1', 'Ingeniería': 100, 'Ciencias de la Salud': 80, "...": 70},
    {'semester': '2', 'Ingeniería': 70, 'Ciencias de la Salud': 70, '...': 100},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Semestre", dataList_sem_fac_post, 'semester', 'sem', 'post');
});

var dataList_sem_fac_win = [
    {'semester': '1', 'Ingeniería': 50, 'Ciencias de la Salud': 40, "...": 35},
    {'semester': '2', 'Ingeniería': 30, 'Ciencias de la Salud': 20, '...': 40},
];
google.charts.setOnLoadCallback(function() {
    drawTable_fac("Semestre", dataList_sem_fac_win, 'semester', 'sem', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function drawTable_fac(call_field, dataList, dataList_call_field, div_call_name, div_extra) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', call_field);

    var keys = Object.keys(dataList[0]);

    var index = keys.indexOf(dataList_call_field);
    // Si dataList_call_field se encuentra en el array, eliminarlo
    if (index !== -1) {
        keys.splice(index, 1);
    }


    for (var i = 0; i < keys.length; i++) {
        data.addColumn('number', keys[i]);
    }

    for (var i = 0; i < dataList.length; i++) {
        var row = [
            dataList[i][dataList_call_field]
        ];
        for (var j = 0; j < keys.length; j++) {
            row.push(dataList[i][keys[j]]);
        }
        data.addRow(row);
    }

    for (var i = 0; i < dataList.length; i++) {
        if (i % 2 === 0) {
            data.setProperty(i, 0, 'className', 'custom-cell-first-column');
        } else {
            data.setProperty(i, 0, 'className', 'custom-cell-first-column-oddrow');
        }
    }

    var table = new google.visualization.Table(document.getElementById(`table_div_${div_call_name}_fac_${div_extra}`));

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