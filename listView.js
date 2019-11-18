window.addEventListener("DOMContentLoaded", Start);

let kategoriArray = [];
let urlParams = new URLSearchParams(window.location.search);
let kategoriID = urlParams.get("id");
let kategoriUrl = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/kategori?include[]=" + kategoriID;
let kategoriIndhold = document.querySelector(".kategoriIndhold");


let cykler = [];
const url = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel/?&per_page=99";
const temp = document.querySelector("template");
const list = document.querySelector(".list");



function Start() {
    kategoriGetJson();
}

async function kategoriGetJson() {
    const response = await fetch(kategoriUrl);
    kategoriArray = await response.json();
    kategoriArray = kategoriArray[0];
    showKategori();
}

async function GetJson() {
    const response = await fetch(url);
    cykler = await response.json();
    ShowList();
}

function showKategori() {
    kategoriIndhold.innerHTML = kategoriArray.content.rendered;
    myCategory = kategoriArray.title.rendered;
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
            /* list.lastElementChild.addEventListener("click", () => {
                location.href = "cykel.html?id=" + cykel.id;
            }); */
            list.lastElementChild.querySelector(".single_bike").addEventListener("click", () => {
                location.href = "cykel.html?id=" + cykel.id;
            });
        }
    })
}


function goBack() {
    window.history.back();
}
