window.addEventListener("DOMContentLoaded",Start);

const el= document.querySelector(".el");
const trekking=document.querySelector(".trekk");
const city= document.querySelector(".city");
const race=document.querySelector(".race");

function Start()
{ 
    el.addEventListener("click" ,() => {
        location.href="kategori.html?kategori="+"E-bike";
    });
    trekking.addEventListener("click", () => {
        location.href="kategori.html?kategori="+"Trekking";
    });
    city.addEventListener("click", () => {
        location.href="kategori.html?kategori="+"City";
    });
    race.addEventListener("click", () => {
        location.href="kategori.html?kategori="+"Race";
    });
}