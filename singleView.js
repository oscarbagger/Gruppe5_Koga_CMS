window.addEventListener("DOMContentLoaded", Start);

// get the specific bike by reading part of the url
let urlParams = new URLSearchParams(window.location.search);
let myID = urlParams.get("id");
let url = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel?include[]=" + myID;
const title=document.querySelector("title");
console.log(myID);

const cykelInfo = document.querySelector(".cykelInfo");
const cykelBenefits = document.querySelector(".benefits");



function Start() {
    GetJson();
}

async function GetJson() {
    const response = await fetch(url);
    cykel = await response.json();
    cykel = cykel[0];
    console.log(cykel);
    title.textContent=cykel.title.rendered;
    showBike();
}

function showBike() {
    cykelInfo.querySelector(".title").textContent = cykel.title.rendered;
    cykelInfo.querySelector(".langTekst").textContent = cykel.lang_beskrivelse;
    cykelInfo.querySelector(".kortTekst").textContent = cykel.kort_tekst;
    cykelInfo.querySelector(".topImg").src = cykel.billede[0].guid;
    cykelInfo.querySelector(".topImg").alt = cykel.title.rendered;
    cykelInfo.querySelector(".stemningsbillede").src = cykel.stemningsbillede.guid;
    cykelInfo.querySelector(".stemningsbillede").alt = cykel.title.rendered;
    cykelInfo.querySelector(".pris").textContent = "Pris: " + cykel.pris + " kr";
    MakeListItem(cykel.fordel_1, cykelBenefits.querySelector("ul"));
    MakeListItem(cykel.fordel_2, cykelBenefits.querySelector("ul"));
    if (cykel.fordel_3 != "") {
        MakeListItem(cykel.fordel_3, cykelBenefits.querySelector("ul"));
    }
}

function MakeListItem(listText, parentList) {
    let newListItem = document.createElement("li");
    newListItem.textContent = listText;
    parentList.appendChild(newListItem);
}

function goBack() {
    window.history.back();
}
