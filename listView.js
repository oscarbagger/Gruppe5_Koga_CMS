window.addEventListener("DOMContentLoaded",Start);

let cykler=[];
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/cykel";
const temp=document.querySelector("template");
const list=document.querySelector(".list");

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
        let clone=temp.cloneNode(true).content;
        clone.querySelector("img").src=cykel.billede.guid;
        clone.querySelector("img").alt=cykel.title.rendered;
        clone.querySelector(".kortTekst").textContent=cykel.kort_tekst.rendered;
        clone.querySelector(".pris").textContent=cykel.pris.rendered;
        list.appendChild(clone);
        // eventlistener to go to singleview
        list.lastElementChild.addEventListener("click",() => {
            location.href="cykel.html?id="+cykel.id;
        })
    })
}

