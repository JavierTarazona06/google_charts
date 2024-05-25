google.charts.load('current', {'packages':['corechart']});
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
var dataList_univ_papa_post = [
    {'university': 'UNAL', 'min': 4.3, 'max': 4.9},
    {'university': 'UNIANDES', 'min': 3.8, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
    drawChartCandle('university', dataList_univ_papa_post, 'PAPA', 'Universidades', 'uni', 'papa', 'post');
});

var dataList_univ_papa_win = [
    {'university': 'UNAL', 'min': 4.5, 'max': 4.9},
    {'university': 'UNIANDES', 'min': 4.3, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
    drawChartCandle('university', dataList_univ_papa_win, 'PAPA', 'Universidades', 'uni', 'papa', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_papa_post = [
    {'country': 'Mexico', 'min': 4.3, 'max': 4.9},
    {'country': 'Canadá', 'min': 3.8, 'max': 4.8},
    {'country': 'Francia', 'min': 4.3, 'max': 4.9},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('country', dataList_country_papa_post, 'PAPA', 'Paises', 'cou', 'papa', 'post');
});

var dataList_country_papa_win = [
    {'country': 'Mexico', 'min': 4.5, 'max': 4.9},
    {'country': 'Canadá', 'min': 4.3, 'max': 4.8},
    {'country': 'Francia', 'min': 4.5, 'max': 4.9},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('country', dataList_country_papa_win, 'PAPA', 'Paises', 'cou', 'papa', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_papa_post = [
    {'region': 'Uniandes', 'min': 4.3, 'max': 4.9},
    {'region': 'Norteamérica', 'min': 3.8, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('region', dataList_region_papa_post, 'PAPA', 'Regiones', 'reg', 'papa', 'post');
});

var dataList_region_papa_win = [
    {'region': 'Uniandes', 'min': 4.5, 'max': 4.9},
    {'region': 'Norteamérica', 'min': 4.3, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('region', dataList_region_papa_win, 'PAPA', 'Regiones', 'reg', 'papa', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_papa_post = [
    {'year': '2023', 'min': 4.3, 'max': 4.9},
    {'year': '2024', 'min': 3.8, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('year', dataList_yea_papa_post, 'PAPA', 'Años', 'yea', 'papa', 'post');
});

var dataList_yea_papa_win = [
    {'year': '2023', 'min': 4.5, 'max': 4.9},
    {'year': '2024', 'min': 4.3, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('year', dataList_yea_papa_win, 'PAPA', 'Años', 'yea', 'papa', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_papa_post = [
    {'semester': '1', 'min': 4.3, 'max': 4.9},
    {'semester': '2', 'min': 3.8, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('semester', dataList_sem_papa_post, 'PAPA', 'Semestres', 'sem', 'papa', 'post');
});

var dataList_sem_papa_win = [
    {'semester': '1', 'min': 4.5, 'max': 4.9},
    {'semester': '2', 'min': 4.3, 'max': 4.8},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('semester', dataList_sem_papa_win, 'PAPA', 'Semestres', 'sem', 'papa', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

function drawChartCandle(dataList_call_field, dataList, category, x_title, div_call_name, div_extra, div_extra2) {

    var list_to_data = []

    for (var i = 0; i < dataList.length; i++) {
        list_to_data.push([dataList[i][dataList_call_field], dataList[i]['min'], dataList[i]['min'], dataList[i]['max'], dataList[i]['max']])
    }


    var data = google.visualization.arrayToDataTable(list_to_data, true);

    var options = {
        title: `Gráfico de ${category}`,
        legend:'none',
        vAxis: {
            title: category,
            maxValue: 5,
            minValue: 0,
            titleTextStyle: {
                color: 'blue',
                fontSize: 16,
                bold: true,
                italic: false
            }
        },
        hAxis: {
            title: x_title,
            titleTextStyle: {
                color: 'blue',
                fontSize: 16,
                bold: true,
                italic: false
            }
        },
        tooltip: {
            isHtml: true
        }
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById(`graph_div_${div_call_name}_${div_extra}_${div_extra2}`));

    chart.draw(data, options);
}

