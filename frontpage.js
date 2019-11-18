window.addEventListener("DOMContentLoaded", Start);

let kategorier = [];
let kategorierUrl = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/kategori?_embed";
const temp = document.querySelector("template");
const list = document.querySelector(".kategorier");

function Start() {
    getJson();
}

async function getJson() {
    const response = await fetch(kategorierUrl);
    kategorier = await response.json();
    ShowList();
}

function ShowList() {
    kategorier.forEach(kategori => {
        console.log(kategori);
        let clone = temp.cloneNode(true).content;
        clone.querySelector(".title").textContent = kategori.title.rendered;
        clone.querySelector("img").src = kategori._embedded["wp:featuredmedia"][0].source_url;
        clone.querySelector("img").alt = kategori.title.rendered;
        list.appendChild(clone);
        // eventlistener to go to listview
        list.lastElementChild.addEventListener("click", () => {
            location.href = "kategori.html?id=" + kategori.id;
        });
    })
}

/*const el= document.querySelector(".el");
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
}*/
