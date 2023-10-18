import { Serie } from './serie.js';
import { series } from './data.js';


let peliculasTable: HTMLElement = document.getElementById("series")!;


mostrarDatosPeliculas(series);
averageSeasons(series);
console.log(series);


function mostrarDatosPeliculas(series: Serie[]): void {
    let cursosTbody: HTMLElement = document.createElement("tbody")
    for (let serie of series) {


        let trElement: HTMLElement = document.createElement("tr");
        trElement.setAttribute("class", "clickable");
        trElement.onclick = function () {
            photoCard(serie);
        };
        trElement.innerHTML = `<td><b>${serie.id}</b></td>
        <td><a href="#Card ${serie.nombre}">${serie.nombre}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        cursosTbody.appendChild(trElement);
    }
    peliculasTable.appendChild(cursosTbody);
}

function averageSeasons(series: Serie[]): void {
    let total: number = 0;
    for (let serie of series) {
        total += serie.seasons;
    }
    let average: number = total / series.length;
    let averageElement: HTMLElement = document.getElementById("seasons")!;
    averageElement.innerHTML = `Seasons average: <b>${average}</b>`;
}

function photoCard(serie: Serie): void {
    let photoCard: HTMLElement = document.getElementById("photoCard")!;
    let photo: string = serie.img;
    photoCard.innerHTML = `<img class="card-img-top" src="${photo}">
    <div class="card-body">
        <h5 class="card-title"><b>${serie.nombre}</b></h5>
        <div class="card-content">
            <p>${serie.description}</p>
        </div>
        <div class="card-action">
            <a href="${serie.url}" target="_blank">${serie.url}</a>
        </div>
    </div>`;
}
