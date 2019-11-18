window.addEventListener("DOMContentLoaded", Start);

let currentIndex = 0;
let testimonial_text = [];
const url = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/anbefaling/?&per_page=99";


const container = document.querySelector(".testimonial_text");
const next = document.querySelector(".nextArrow");
const previous = document.querySelector(".prevArrow");


function Start() {
    GetJson();
}

async function GetJson() {
    const response = await fetch(url);
    testimonial_text = await response.json();
    console.log(testimonial_text);
    FillContainer(currentIndex);
    ActivateButtons();

}

function FillContainer(index) {
    container.querySelector("h3").textContent = testimonial_text[index].title.rendered;
    container.querySelector("p").textContent = testimonial_text[index].content.rendered;
}

function ActivateButtons() {
    next.addEventListener("click", () => {
        if (currentIndex < testimonial_text.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        FillContainer(currentIndex);
    })
    previous.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonial_text.length - 1;
        }
        FillContainer(currentIndex);
    })
}
