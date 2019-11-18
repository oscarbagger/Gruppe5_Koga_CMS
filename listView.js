window.addEventListener("DOMContentLoaded", Start);

let kategori = [];
let urlParams = new URLSearchParams(window.location.search);
let kategoriID = urlParams.get("id");
let kategoriUrl = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/kategori?include[]=" + kategoriID;
let kategoriIndhold = document.querySelector(".kategoriIndhold");


let cykler = [];
const url = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel/?&per_page=99";
const temp = document.querySelector("template");
const list = document.querySelector(".list");


let myCategory = urlParams.get("kategori");
console.log(myCategory);

function Start() {
    kategoriGetJson();
}

function TextToLoad() {
    let txt = "";
    switch (myCategory) {
        case "E-bike":
            txt = "e-bikes";
            break;
        case "Trekking":
            txt = "trekking";
            break;
        case "City":
            txt = "city-touring";
            break;
        case "Race":
            txt = "race";
            break;
    }
}

async function kategoriGetJson() {
    const response = await fetch(kategoriUrl);
    kategori = await response.json();
    kategori = kategori[0];
    console.log(kategori);
    showKategori();
}

async function GetJson() {
    const response = await fetch(url);
    cykler = await response.json();
    ShowList();
}

function showKategori() {
    kategoriIndhold.innerHTML = kategori.content.rendered;
    myCategory = kategori.title.rendered;
    GetJson();
}

function ShowList() {
    cykler.forEach(cykel => {
        if (cykel.kategori == myCategory) {
            let clone = temp.cloneNode(true).content;
            clone.querySelector(".title").textContent = cykel.title.rendered;
            clone.querySelector("img").src = cykel.billede[0].guid;
            clone.querySelector("img").alt = cykel.title.rendered;
            clone.querySelector(".kortTekst").textContent = cykel.kort_tekst;
            clone.querySelector(".pris").textContent = "Pris: " + cykel.pris + " kr";
            list.appendChild(clone);
            // eventlistener to go to singleview
            list.lastElementChild.addEventListener("click", () => {
                location.href = "cykel.html?id=" + cykel.id;
            });
            list.querySelector(".single_bike").addEventListener("click", () => {
                location.href = "cykel.html?id=" + cykel.id;
            });
        }
    })
}


function goBack() {
    window.history.back();
}
