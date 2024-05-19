document.addEventListener("DOMContentLoaded", () => {
    const bars = document.getElementById("bars");
    const bars2 = document.getElementById("bars2");
    const barsI = bars.querySelector("i");
    const md = document.getElementById("md");

    bars.addEventListener("click", () => {
        md.style.display = "flex";
        bars.style.opacity = 0;
    });

    bars2.addEventListener("click", () => {
        md.style.display = "none";
        bars.style.opacity = 1;

    });

});