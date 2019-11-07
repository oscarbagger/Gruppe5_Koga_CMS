window.addEventListener("DOMContentLoaded",Start);

let cykler=[];
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel/?&per_page=99";
const temp=document.querySelector("template");
const list=document.querySelector(".list");
const kategoriNavn=document.querySelector(".kategoriNavn");

const loadedContentRef=document.querySelector(".loadedPageContent");

let urlParams = new URLSearchParams(window.location.search);
let myCategory=urlParams.get("kategori");
console.log(myCategory);

function Start()
{
    kategoriNavn.textContent=myCategory;
    //TextToLoad();
    GetJson(); 
}

function TextToLoad()
{
    let txt="";
    switch(myCategory) {
        case "E-bike":
            txt="e-bikes";
            break;
        case "Trekking":
            txt="trekking";
            break;
        case "City & Touring":
            txt="city-touring";
            break;
        case "Race":
            txt="race";
            break;
    }
    loadedContentRef.textContent=txt;
}


async function GetJson()
{
    const response= await fetch(url);
    cykler= await response.json();
    ShowList();
}

function ShowList()
{
    cykler.forEach(cykel => {
        if (cykel.kategori==myCategory)
        {
            let clone=temp.cloneNode(true).content;
            clone.querySelector(".title").textContent=cykel.title.rendered;
            clone.querySelector("img").src=cykel.billede[0].guid;
            clone.querySelector("img").alt=cykel.title.rendered;
            clone.querySelector(".kortTekst").textContent=cykel.kort_tekst;
            clone.querySelector(".pris").textContent="Pris: "+cykel.pris+" kr";
            list.appendChild(clone);
            // eventlistener to go to singleview
            list.lastElementChild.addEventListener("click",() => {
                location.href="cykel.html?id="+cykel.id;
            })
        }
    })
}




