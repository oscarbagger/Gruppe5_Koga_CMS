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
    GetHtml(footerUrl, footer);
    GetHtml(navUrl,header);
    // check if there exists a class saying that content needs to be loaded in.
    if (document.querySelector(".loadedPageContent") !== null) {
        GetJsonContent();
    }
}

async function GetHtml(myUrl, contentDest)
{
    const htmlResponse= await fetch(myUrl);
    content= await htmlResponse.text();
    contentDest.innerHTML=content;
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