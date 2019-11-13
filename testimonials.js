window.addEventListener("DOMContentLoaded",Start);

let currentIndex=0;
let anbefalinger=[];
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/anbefaling/?&per_page=99";


const container=document.querySelector(".anbefaling");
const next=document.querySelector(".nextArrow");
const previous=document.querySelector(".prevArrow");


function Start()
{
    GetJson(); 
}

async function GetJson()
{
    const response= await fetch(url);
    anbefalinger= await response.json();
    console.log(anbefalinger);
    FillContainer(currentIndex);
    ActivateButtons();
    
}

function FillContainer(index)
{
    container.querySelector("h2").textContent=anbefalinger[index].title.rendered;
    container.querySelector("p").textContent=anbefalinger[index].content.rendered;
}

function ActivateButtons()
{
    next.addEventListener("click", () => {
        if (currentIndex<anbefalinger.length-1) {
            currentIndex++;
        } else {
            currentIndex=0;
        }
        FillContainer(currentIndex);
    })
    previous.addEventListener("click", () => {
        if (currentIndex>0)
            {currentIndex--;}
        else {
         currentIndex=anbefalinger.length-1;   
        }
        FillContainer(currentIndex);
    })
}