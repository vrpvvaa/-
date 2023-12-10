let btn = document.getElementById("log");
btn.addEventListener("click", showLog);
function showLog(e) {
    e.preventDefault();
    let log = document.getElementById("inputs2");
    inputs2.style.display = "flex";
    let modal = document.getElementById("modal");
    modal.style.height = "470px";
    modal.style.transition = "1s";
    let reg = document.getElementById("inputs");
    inputs.style.display = "none";
    let logB = document.getElementById("log");
    logB.style.color = "black";
    let regB = document.getElementById("reg");
    regB.style.color = "#0000004b";
    regB.style.fontSize = "35px";
    let sub = document.getElementById("button_sub").value = "Войти";
}

let bttn = document.getElementById("reg");
bttn.addEventListener("click", showReg);
function showReg(e) {
    e.preventDefault();
    let reg3 = document.getElementById("inputs");
    inputs.style.display = "flex";
    let log3 = document.getElementById("inputs2");
    inputs2.style.display = "none";
    let modal2 = document.getElementById("modal");
    modal.style.height = "600px";
    modal.style.transition = "0.1s";
    let reg5 = document.getElementById("reg");
    reg.style.color = "black";
    reg.style.fontSize = "40px"
    let log5 = document.getElementById("log");
    log.style.color = "#0000004b";
    log.style.fontSize = "35px";
    let sub2 = document.getElementById("button_sub").value = "Зарегистрироваться";
}

let btttn = document.getElementById("button_sub");
btttn.addEventListener("click", showPersona);
function showPersona(e) {
    e.preventDefault();
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if (mail == "22@gmail.com" && pass == "22") {
        window.open("another_sites/personal/personal.html", "_blank")
    } else if (mail == "16@gmail.com" && pass == "16" ) {
        window.open("another_sites/ctrlpanel/ctrlpanel.html", "_blank")
    } else {
        alert("елизавета константиновна, пожалуйста, введите корректные данные :(")
}
}