import "../style.css";

function showThanks() {
    const form = document.querySelector("form");
    const rate_element = document.querySelector("#rate");
    const rating = document.querySelector(".rating");
    const thanks = document.querySelector(".thanks");
    if (form == null || rate_element == null || rating == null || thanks == null) {
        return;
    }
    
    const rate_val = new FormData(form);
    if (rate_val == null) {
        return;
    }
    const rate = rate_val.get("rate")?.toString() || "";
    rate_element.innerHTML = rate;

    rating.setAttribute("style", "display: none;");
    thanks.setAttribute("style", "display: flex;");
}

document.querySelector("button")?.addEventListener("click", showThanks);
