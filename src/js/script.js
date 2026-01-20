let usernamesList = ["AlvaroDoGrau", "Nao_eh_o_admin", "Cidade_Goat"];
let passwordList = ["gg_wp_ez_pz", "confia_fio", "top1_professor"];
let username;
let password;

document.getElementById("btn-login").addEventListener("click", Login);

function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    const passIndex = usernamesList.indexOf(username);
    if (passIndex in usernamesList && passIndex in passwordList) {
        if (password === passwordList[passIndex]) {
            console.log("login realizado com sucesso! :)")
            location.href = "./src/pages/calc.html"
        }
    }
    else
        console.log("algo deu de errado prç :(")
}