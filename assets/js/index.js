const splash = document.querySelector('.splash'), 
    bgEstrelas = document.getElementById("estrelas"),
    nav = document.getElementById("nav"),
    logo = document.getElementById("logo"),
    mobileMenu = document.querySelector(".mobile-menu"),
    navList = document.querySelector(".nav-list"),
    navItems = document.querySelectorAll(".nav-list-item"),
    linesMenu = document.querySelectorAll(".line"),
    links = document.querySelectorAll(".nav-links"),
    target = document.querySelectorAll("[data-anime]"),
    form = document.getElementById("formContato"),
    inputNome = document.getElementById("nomeUser"),
    inputEmail = document.getElementById("emailUser"),
    inputAssunto = document.getElementById("assuntoUser"),
    inputMsg = document.getElementById("msgUser"),
    errorText = document.getElementsByClassName("error-text"),
    btnSubmit = document.getElementById("btnSubmit");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add('nothing')
    }, 3000)
})

function handleMenu() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    navItems.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    })
}

function changeNav() {
    nav.classList.toggle("nav-ativo", scrollY > 0);
    navList.classList.toggle("nav-list-branco", scrollY > 0);

    if (scrollY === 0) {
        logo.setAttribute("src", "assets/img/logos/pyxis-branca-sem-slogan.png");
    } else {
        logo.setAttribute("src", "assets/img/logos/pyxis-sem-slogan.png");
    }

    links.forEach((e) => {
        e.classList.toggle("nav-links-ativo", scrollY > 0);
    });

    linesMenu.forEach((e) => {
        e.classList.toggle("line-ativo", scrollY > 0);
    });
}

function animateElements() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach((e) => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    });
}

function validateInputs() {
    const valueNome = inputNome.value,
        regexEmail = /\S+@\S+\.\S+/,
        emailTest = regexEmail.test(inputEmail.value),
        valueAssunto = inputAssunto.value,
        valueMsg = inputMsg.value;

    if (valueNome === "") {
        inputNome.setAttribute("class", "input-error");
        errorText[0].classList.add("active");
    } else {
        inputNome.classList.remove("input-error");
        errorText[0].classList.remove("active");
    }

    if (emailTest === false) {
        inputEmail.setAttribute("class", "input-error");
        errorText[1].classList.add("active");
    } else {
        inputEmail.classList.remove("input-error");
        errorText[1].classList.remove("active");
    }

    if (valueAssunto === "") {
        inputAssunto.setAttribute("class", "input-error");
        errorText[2].classList.add("active");
    } else {
        inputAssunto.classList.remove("input-error");
        errorText[2].classList.remove("active");
    }

    if (valueMsg === "") {
        inputMsg.setAttribute("class", "input-error");
        errorText[3].classList.add("active");
    } else {
        inputMsg.classList.remove("input-error");
        errorText[3].classList.remove("active");
    }

    if (valueNome !== "" && emailTest === true && valueAssunto !== "" && valueMsg !== "") {
        form.submit();
    }
}

function removeInputsError() {
    const valueNome = inputNome.value,
        regexEmail = /\S+@\S+\.\S+/,
        emailTest = regexEmail.test(inputEmail.value),
        valueAssunto = inputAssunto.value,
        valueMsg = inputMsg.value;

    if (valueNome !== "") {
        inputNome.classList.remove("input-error");
        errorText[0].classList.remove("active");
    }

    if (emailTest !== false) {
        inputEmail.classList.remove("input-error");
        errorText[1].classList.remove("active");
    }

    if (valueAssunto !== "") {
        inputAssunto.classList.remove("input-error");
        errorText[2].classList.remove("active");
    }

    if (valueMsg !== "") {
        inputMsg.classList.remove("input-error");
        errorText[3].classList.remove("active");
    }
}

if (window.matchMedia("(max-width: 999px)").matches) {
    bgEstrelas.classList.remove("estrelas_animation");
}

document.addEventListener("keypress", () => {
    if (window.event.keyCode === 13) {
        btnSubmit.click();
    }
});

window.addEventListener("scroll", changeNav);
window.addEventListener("scroll", animateElements);
mobileMenu.addEventListener("click", handleMenu);
btnSubmit.addEventListener("click", validateInputs);
inputNome.addEventListener("input", removeInputsError);
inputEmail.addEventListener("input", removeInputsError);
inputAssunto.addEventListener("input", removeInputsError);
inputMsg.addEventListener("input", removeInputsError);