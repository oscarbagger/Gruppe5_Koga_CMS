window.addEventListener("DOMContentLoaded",Start);

const el= document.querySelector(".kategori_el");
const trekking=document.querySelector(".kategori_trekk");
const city= document.querySelector(".kategori_city");
const race=document.querySelector(".kategori_race");

function Start()
{ 
    el.addEventListener("click" ,()=> {
        location.href="kategori.html?kategori="+"E-bike";
    });
    trekking.addEventListener("click", () => {
        location.href="kategori.html?kategori="+"Trekking";
    });
    city.addEventListener("click", () => {
        location.href="kategori.html?kategori="+"City & Touring";
    });
    race.addEventListener("click", () => {
        location.href="kategori.html?kategori="+"Race";
    });
}