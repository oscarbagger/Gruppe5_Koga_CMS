window.addEventListener("DOMContentLoaded",StartLoad);

let content;
const footerUrl="footer.html";
const navUrl="navigation.html";
const pageURl="https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/pages/?&per_page=99";


const main=document.querySelector("main");
const footer=document.querySelector("footer");
const header=document.querySelector("header");

function StartLoad()
{ 
    GetNav();
    GetFooter();
    // check if there exists a class saying that content needs to be loaded in.
    if (document.querySelector(".loadedPageContent") !== null) {
        GetJsonContent();
    }
}

async function GetNav()
{
    const htmlResponse= await fetch(navUrl);
    content= await htmlResponse.text();
    header.innerHTML=content;
    let nav=header.querySelector("nav");
    let menu=header.querySelector(".burgermenu");
    menu.addEventListener("click", () => {
        if(nav.style.display="none")
            {
                nav.style.display="flex";
                menu.style.display="none";
            }
    })
}

async function GetFooter()
{
    const htmlResponse= await fetch(footerUrl);
    content= await htmlResponse.text();
    footer.innerHTML=content;
}

async function GetJsonContent()
{
    const jsonData= await fetch(pageURl);
    pages= await jsonData.json();
    InsertContent();
}

function InsertContent()
{
    let pageText=document.querySelector(".loadedPageContent").textContent;
    pages.forEach(page => {
        if (page.slug==pageText)
            {
                main.innerHTML=page.content.rendered+main.innerHTML;
                console.log("loaded");
            }
    })
}