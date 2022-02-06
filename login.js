const btnSubmit = document.querySelector("#btn-submit");
const userName = document.querySelector("#username");
const pass = document.querySelector("#password");

async function login(username, password) {
    try {

        const response = await axios.get("https://attendanceTracker.kk-001.repl.co/login", {
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }, {
            auth: {
                username: username,
                password: password
            }
        });
        localStorage.setItem("accessToken", JSON.stringify(response.data));
        window.location.replace("./home.html");
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

btnSubmit.addEventListener("click", () => {


    login(userName.value, pass.value);

    // console.log(userName.value, pass.value);

});