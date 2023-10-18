import { series } from './data.js';
var peliculasTable = document.getElementById("series");
mostrarDatosPeliculas(series);
averageSeasons(series);
console.log(series);
function mostrarDatosPeliculas(series) {
    var cursosTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("class", "clickable");
        trElement.onclick = function () {
            photoCard(serie);
        };
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n        <td><a href=\"#Card ").concat(serie.nombre, "\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        cursosTbody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    peliculasTable.appendChild(cursosTbody);
}
function averageSeasons(series) {
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        total += serie.seasons;
    }
    var average = total / series.length;
    var averageElement = document.getElementById("seasons");
    averageElement.innerHTML = "Seasons average: <b>".concat(average, "</b>");
}
function photoCard(serie) {
    var photoCard = document.getElementById("photoCard");
    var photo = serie.img;
    photoCard.innerHTML = "<img class=\"card-img-top\" src=\"".concat(photo, "\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\"><b>").concat(serie.nombre, "</b></h5>\n        <div class=\"card-content\">\n            <p>").concat(serie.description, "</p>\n        </div>\n        <div class=\"card-action\">\n            <a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.url, "</a>\n        </div>\n    </div>");
}
