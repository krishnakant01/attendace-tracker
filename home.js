if (!localStorage.getItem("accessToken")) {

    window.location.replace("./login.html");
} else {

    const divA = document.querySelector("#division-A");
    const divB = document.querySelector("#division-B");

    divA.addEventListener("click", () => {
        window.location.href = "./divisionA.html";
    });

    divB.addEventListener("click", () => {
        window.location.href = "./divisionB.html";
    });
}

//logout ke time delete access token