window.addEventListener("DOMContentLoaded",Start);

let cykler;
const url="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/posts"

function Start()
{
   GetJson(); 
}


async function GetJson()
{
    const response= await fetch(url);
    cykler= await response.json();
    console.log(cykler);
}