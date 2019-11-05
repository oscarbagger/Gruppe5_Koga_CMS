window.addEventListener("DOMContentLoaded",Start);

let content;
const footerUrl="footer.html";
const navUrl="navigation.html";

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