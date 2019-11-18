window.addEventListener("DOMContentLoaded", Start);

let cykler = [];
const url = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel/?&per_page=99";
const temp = document.querySelector("template");
const list = document.querySelector(".list");

let kategoriArray = [];
let urlParams = new URLSearchParams(window.location.search);
let kategoriID = urlParams.get("id");
let kategoriUrl = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/kategori?include[]=" + kategoriID;
let kategoriIndhold = document.querySelector(".kategoriIndhold");


function Start() {
    kategoriGetJson();
}

async function kategoriGetJson() {
    const response = await fetch(kategoriUrl);
    kategoriArray = await response.json();
    console.log(kategoriArray);
    kategoriArray = kategoriArray[0];
    showKategori();
}
function showKategori() {
    kategoriIndhold.innerHTML = kategoriArray.content.rendered;
    myCategory = kategoriArray.title.rendered;
    cyklerGetJson();
}

async function cyklerGetJson() {
    const response = await fetch(url);
    cykler = await response.json();
    ShowList();
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
            list.lastElementChild.querySelector(".single_bike").addEventListener("click", () => {
                location.href = "cykel.html?id=" + cykel.id;
            });
        }
    })
}

function goBack() {
    window.history.back();
}
