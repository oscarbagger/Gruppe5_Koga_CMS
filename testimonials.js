window.addEventListener("DOMContentLoaded", Start);

let currentIndex = 0;
let testimonial_text = [];
const url = "https://oscarbagger.dk/kea/Gruppe5_Koga_CMS/wordpress/wp-json/wp/v2/anbefaling/?&per_page=99";


const container = document.querySelector(".testimonial_text");
const next = document.querySelector(".nextArrow");
const previous = document.querySelector(".prevArrow");
const text=document.querySelector(".testimonial_text p")

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
    container.querySelector("h4").textContent = testimonial_text[index].title.rendered;
    container.querySelector("p").innerHTML = testimonial_text[index].content.rendered;
}

function ActivateButtons() {
    next.addEventListener("click", () => {
        text.classList.remove("transitionIn");
        text.classList.add("transitionOut");
        text.addEventListener("animationend", () => {
            text.classList.remove("transitionOut");
            text.classList.add("transitionIn");
        })
        if (currentIndex < testimonial_text.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        FillContainer(currentIndex);
    })
    previous.addEventListener("click", () => {
        text.classList.remove("transitionIn");
        text.classList.add("transitionOut");
        text.addEventListener("animationend", () => {
            text.classList.remove("transitionOut");
            text.classList.add("transitionIn");
        })
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonial_text.length - 1;
        }
        FillContainer(currentIndex);
    })
}
