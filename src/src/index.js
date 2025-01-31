const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");

//Theme Variations//

function darkMode() {
    const moonIcon = document.querySelector("#moon");
    const sunIcon = document.querySelector("#sun");

    moonIcon.addEventListener("click", () => {
        document.body.classList.add("dark");
        moonIcon.style.display = "none";
        sunIcon.style.display = "flex";
    });
};

darkMode();

function lightMode() {
    const moonIcon = document.querySelector("#moon");
    const sunIcon = document.querySelector("#sun");

    sunIcon.addEventListener("click", () => {
        document.body.classList.remove("dark");
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    });
};

lightMode();