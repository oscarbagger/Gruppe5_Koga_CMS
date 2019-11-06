window.addEventListener("DOMContentLoaded",Start);

let cykler=[];
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel/?&per_page=99";
// get the specific bike by reading part of the url
let urlParams = new URLSearchParams(window.location.search);
let myID = urlParams.get("id");
let pageTtitle = document.querySelector("title");

const cykelInfo=document.querySelector(".cykelInfo");

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
                cykelInfo.querySelector(".title").textContent=cykel.title.rendered;
                cykelInfo.querySelector(".topImg").src=cykel.billede[0].guid;
                cykelInfo.querySelector(".topImg").alt=cykel.title.rendered;
                cykelInfo.querySelector(".stemningsbillede").src=cykel.stemningsbillede.guid;
                cykelInfo.querySelector(".stemningsbillede").alt=cykel.title.rendered;
                cykelInfo.querySelector(".langTekst").textContent=cykel.lang_beskrivelse;
                cykelInfo.querySelector(".pris").textContent="Pris: "+cykel.pris+" kr";
                MakeListItem(cykel.fordel_1);
            }
    })
}


function MakeListItem(listText)
{
    let fordelListe=cykelInfo.querySelector("ul");
    let nyFordel=document.createElement("li");
    nyFordel.textContent=listText;
    fordelListe.appendChild(nyFordel);
}
