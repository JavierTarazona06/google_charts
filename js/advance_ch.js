google.charts.load('current', {'packages':['corechart']});
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
var dataList_univ_adv_post = [
    {'university': 'UNAL', 'min': 40, 'max': 95},
    {'university': 'UNIANDES', 'min': 55, 'max': 85},
];
google.charts.setOnLoadCallback(function() {
    drawChartCandle('university', dataList_univ_adv_post, 'Avance de carrera', 'Universidades', 'uni', 'adv', 'post');
});

var dataList_univ_adv_win = [
    {'university': 'UNAL', 'min': 60, 'max': 95},
    {'university': 'UNIANDES', 'min': 65, 'max': 80},
];
google.charts.setOnLoadCallback(function() {
    drawChartCandle('university', dataList_univ_adv_win, 'Avance de carrera', 'Universidades', 'uni', 'adv', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_country_adv_post = [
    {'country': 'Mexico', 'min': 40, 'max': 95},
    {'country': 'Canadá', 'min': 55, 'max': 85},
    {'country': 'Francia', 'min': 40, 'max': 95},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('country', dataList_country_adv_post, 'Avance de carrera', 'Paises', 'cou', 'adv', 'post');
});

var dataList_country_adv_win = [
    {'country': 'Mexico', 'min': 60, 'max': 95},
    {'country': 'Canadá', 'min': 65, 'max': 80},
    {'country': 'Francia', 'min': 60, 'max': 95},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('country', dataList_country_adv_win, 'Avance de carrera', 'Paises', 'cou', 'adv', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_region_adv_post = [
    {'region': 'Uniandes', 'min': 40, 'max': 95},
    {'region': 'Norteamérica', 'min': 55, 'max': 85},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('region', dataList_region_adv_post, 'Avance de carrera', 'Regiones', 'reg', 'adv', 'post');
});

var dataList_region_adv_win = [
    {'region': 'Uniandes', 'min': 60, 'max': 95},
    {'region': 'Norteamérica', 'min': 65, 'max': 80},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('region', dataList_region_adv_win, 'Avance de carrera', 'Regiones', 'reg', 'adv', 'win');
});


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_yea_adv_post = [
    {'year': '2023', 'min': 40, 'max': 95},
    {'year': '2024', 'min': 55, 'max': 85},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('year', dataList_yea_adv_post, 'Avance de carrera', 'Años', 'yea', 'adv', 'post');
});

var dataList_yea_adv_win = [
    {'year': '2023', 'min': 60, 'max': 95},
    {'year': '2024', 'min': 65, 'max': 80},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('year', dataList_yea_adv_win, 'Avance de carrera', 'Años', 'yea', 'adv', 'win');
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

var dataList_sem_adv_post = [
    {'semester': '1', 'min': 40, 'max': 95},
    {'semester': '2', 'min': 55, 'max': 85},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('semester', dataList_sem_adv_post, 'Avance de carrera', 'Semestres', 'sem', 'adv', 'post');
});

var dataList_sem_adv_win = [
    {'semester': '1', 'min': 60, 'max': 95},
    {'semester': '2', 'min': 65, 'max': 80},
];
google.charts.setOnLoadCallback(function() {
   drawChartCandle('semester', dataList_sem_adv_win, 'Avance de carrera', 'Semestres', 'sem', 'adv', 'win');
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

