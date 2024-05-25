google.charts.load('current', {'packages':['corechart']});
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
var dataList_univ_pbm_post = [
    {'university': 'UNAL', 'min': 45, 'max': 80},
    {'university': 'UNIANDES', 'min': 15, 'max': 90},
];
google.charts.setOnLoadCallback(function() {
    drawChart('university', dataList_univ_pbm_post, 'PBM', 'Universidades', 'uni', 'pbm');
});

// var dataList_univ_maj_win = [
//     {'university': 'UNAL', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
//     {'university': 'UNIANDES', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Universidad", dataList_univ_maj_win, 'university', 'uni', 'win');
// });
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// var dataList_country_maj_post = [
//     {'country': 'Mexico', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
//     {'country': 'Canadá', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
//     {'country': 'Francia', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("País", dataList_country_maj_post, 'country', 'cou', 'post');
// });
//
// var dataList_country_maj_win = [
//     {'country': 'Mexico', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
//     {'country': 'Canadá', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
//     {'country': 'Francia', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("País", dataList_country_maj_win, 'country', 'cou', 'win');
// });
//
// //----------------------------------------------------------------------------
// //----------------------------------------------------------------------------
//
// var dataList_region_maj_post = [
//     {'region': 'Uniandes', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
//     {'region': 'Norteamérica', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Región", dataList_region_maj_post, 'region', 'reg', 'post');
// });
//
// var dataList_region_maj_win = [
//     {'region': 'Asia', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
//     {'region': 'Europa', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Región", dataList_region_maj_win, 'region', 'reg', 'win');
// });
//
//
// //----------------------------------------------------------------------------
// //----------------------------------------------------------------------------
//
// var dataList_yea_maj_post = [
//     {'year': '2023', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
//     {'year': '2024', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Año", dataList_yea_maj_post, 'year', 'yea', 'post');
// });
//
// var dataList_yea_maj_win = [
//     {'year': '2023', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
//     {'year': '2024', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Año", dataList_yea_maj_win, 'year', 'yea', 'win');
// });
//
// //----------------------------------------------------------------------------
// //----------------------------------------------------------------------------
//
// var dataList_sem_maj_post = [
//     {'semester': '1', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
//     {'semester': '2', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Semestre", dataList_sem_maj_post, 'semester', 'sem', 'post');
// });
//
// var dataList_sem_maj_win = [
//     {'semester': '1', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
//     {'semester': '2', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
// ];
// google.charts.setOnLoadCallback(function() {
//     drawTable_maj("Semestre", dataList_sem_maj_win, 'semester', 'sem', 'win');
// });
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

function drawChart(dataList_call_field, dataList, category, x_title, div_call_name, div_extra) {

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
            isHtml: true // Permitir HTML en los tooltips
        }
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById(`graph_div_${div_call_name}_${div_extra}_post`));

    chart.draw(data, options);
}

