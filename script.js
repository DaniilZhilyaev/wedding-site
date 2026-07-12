/* ==========================================================
   Wedding Site
   script.js
========================================================== */

// ================================
// Обратный отсчет
// ================================

const weddingDate = new Date("2026-10-09T14:10:00");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date();

    const distance = weddingDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


// ================================
// Появление секций
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},

{

    threshold:0.15

});

sections.forEach(section=>{

    observer.observe(section);

});


// ================================
// Плавленный скролл
// ================================

const indicator = document.querySelector(".scroll-indicator");

indicator.addEventListener("click",()=>{

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

});


// ================================
// Маршрут
// ================================


document.querySelectorAll(".section-arrow").forEach(arrow => {

    arrow.addEventListener("click", () => {

        const nextSection = arrow.closest("section").nextElementSibling;

        if(nextSection){

            nextSection.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// Возврат наверх
// ================================

const backToTop = document.querySelector(".back-to-top");

if(backToTop){

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}