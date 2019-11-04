window.addEventListener("DOMContentLoaded",Start);

let cykler;
let content;
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/posts"
const footerUrl="footer.html";

const footer=document.querySelector("footer");

function Start()
{
    GetJson(); 
    GetHtml(footerUrl);
}


async function GetJson()
{
    const response= await fetch(url);
    cykler= await response.json();
    console.log(cykler);
}

async function GetHtml(myUrl)
{
    const response= await fetch(myUrl);
    content= await response.text();
    footer.innerHTML=content;
    console.log(content);
}