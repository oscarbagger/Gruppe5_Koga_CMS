window.addEventListener("DOMContentLoaded",Start);

let cykler=[];
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel";
// get the specific bike by reading part of the url
let urlParams = new URLSearchParams(window.location.search);
let myID = urlParams.get("id");
let pageTtitle = document.querySelector("title");

function Start()
{
    GetJson(); 
}

async function GetJson()
{
    const response= await fetch(url);
    cykler= await response.json();
    console.log(cykler);
    ShowList();
}

function ShowList()
{
    cykler.forEach(cykel => {
        if (cykel.id=myID)
            {
                clone.querySelector("img").src=cykel.billede[0].guid;
                clone.querySelector("img").alt=cykel.title.rendered;
                clone.querySelector(".kortTekst").textContent=cykel.kort_tekst;
                clone.querySelector(".pris").textContent="Pris: "+cykel.pris+" kr";
            }
    })
}

