google.charts.load('current', {'packages':['corechart']});
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
var dataList_univ_pbm_post = [
    {'university': 'UNAL', 'min': 45, 'max': 80},
    {'university': 'UNIANDES', 'min': 15, 'max': 90},
];
google.charts.setOnLoadCallback(function() {
    drawChartCandle('university', dataList_univ_pbm_post, 'PBM', 'Universidades', 'uni', 'pbm', 'post');
});

var dataList_univ_pbm_win = [
    {'university': 'UNAL', 'min': 50, 'max': 70},
    {'university': 'UNIANDES', 'min': 40, 'max': 65},
];
google.charts.setOnLoadCallback(function() {
    drawChartCandle('university', dataList_univ_pbm_win, 'PBM', 'Universidades', 'uni', 'pbm', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_pbm_post = [
    {'country': 'Mexico', 'min': 45, 'max': 80},
    {'country': 'Canadá', 'min': 15, 'max': 90},
    {'country': 'Francia', 'min': 45, 'max': 80},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('country', dataList_country_pbm_post, 'PBM', 'Paises', 'cou', 'pbm', 'post');
});

var dataList_country_pbm_win = [
    {'country': 'Mexico', 'min': 50, 'max': 70},
    {'country': 'Canadá', 'min': 40, 'max': 65},
    {'country': 'Francia', 'min': 50, 'max': 70},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('country', dataList_country_pbm_win, 'PBM', 'Paises', 'cou', 'pbm', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_pbm_post = [
    {'region': 'Uniandes', 'min': 45, 'max': 80},
    {'region': 'Norteamérica', 'min': 15, 'max': 90},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('region', dataList_region_pbm_post, 'PBM', 'Regiones', 'reg', 'pbm', 'post');
});

var dataList_region_pbm_win = [
    {'region': 'Uniandes', 'min': 50, 'max': 70},
    {'region': 'Norteamérica', 'min': 40, 'max': 65},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('region', dataList_region_pbm_win, 'PBM', 'Regiones', 'reg', 'pbm', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_pbm_post = [
    {'year': '2023', 'min': 45, 'max': 80},
    {'year': '2024', 'min': 15, 'max': 90},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('year', dataList_yea_pbm_post, 'PBM', 'Años', 'yea', 'pbm', 'post');
});

var dataList_yea_pbm_win = [
    {'year': '2023', 'min': 50, 'max': 70},
    {'year': '2024', 'min': 40, 'max': 65},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('year', dataList_yea_pbm_win, 'PBM', 'Años', 'yea', 'pbm', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_pbm_post = [
    {'semester': '1', 'min': 45, 'max': 80},
    {'semester': '2', 'min': 15, 'max': 90},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('semester', dataList_sem_pbm_post, 'PBM', 'Semestres', 'sem', 'pbm', 'post');
});

var dataList_sem_pbm_win = [
    {'semester': '1', 'min': 50, 'max': 70},
    {'semester': '2', 'min': 40, 'max': 65},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('semester', dataList_sem_pbm_win, 'PBM', 'Semestres', 'sem', 'pbm', 'win');
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
            maxValue: 100,
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

