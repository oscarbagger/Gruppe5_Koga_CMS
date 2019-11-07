window.addEventListener("DOMContentLoaded",Start);

let content;
const footerUrl="footer.html";
const navUrl="navigation.html";
const pageURl="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/pages/?&per_page=99";


const main=document.querySelector("main");
const footer=document.querySelector("footer");
const header=document.querySelector("header");

function Start()
{ 
    GetHtml(footerUrl, footer);
    GetHtml(navUrl,header);
}

async function GetHtml(myUrl, contentDest)
{
    const response= await fetch(myUrl);
    content= await response.text();
    contentDest.innerHTML=content;
}

async function GetJson()
{
    const jsonData= await fetch(pageURl);
    pages= await jsonData.json();
}