const navbar = document.getElementById("navbar"),
    logo = document.getElementById("logo"),
    linesMenu = document.querySelectorAll(".line"),
    navbarList = document.querySelector(".navbar-list"),
    links = document.querySelectorAll(".navbar-links"),
    target = document.querySelectorAll("[data-anime]"),
    form = document.getElementById("formContato"),
    inputNome = document.getElementById("nomeUser"),
    inputEmail = document.getElementById("emailUser"),
    inputAssunto = document.getElementById("assuntoUser"),
    inputMsg = document.getElementById("msgUser"),
    errorText = document.getElementsByClassName("error-text"),
    btnSubmit = document.getElementById("btnSubmit");

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.handleClick = this.handleClick.bind(this);
        this.activeClass = "active";
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
}
const mobileNavbar = new MobileNavbar(".mobile-menu", ".navbar-list", ".navbar-list-item",);
mobileNavbar.addClickEvent();

const ativarScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    navbar.classList.toggle("navbar-ativo", scrollY > 0);
    navbarList.classList.toggle("navbar-list-branco", scrollY > 0)

    if (scrollY === 0) {
        logo.setAttribute("src", "assets/img/logo-branca.png");
    } else {
        logo.setAttribute("src", "assets/img/logo.png");
    }

    if (window.matchMedia("(max-width: 999px)").matches) {
        target.forEach((e) => {
            e.removeAttribute('data-anime');
            document.getElementById('estrelas').classList.remove('estrelas_animation')
        })
    }

    links.forEach((e) => {
        e.classList.toggle("navbar-links-ativo", scrollY > 0);
    })

    linesMenu.forEach((e) => {
        e.classList.toggle("line-ativo", scrollY > 0);
    })

    target.forEach((e) => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })
}

const validarCampos = () => {
    let valueNome = inputNome.value,
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

const removerErro = () => {
    let valueNome = inputNome.value,
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

document.addEventListener("keypress", () => {
    if (window.event.keyCode === 13) {
        btnSubmit.click();
    }
});

window.addEventListener("scroll", ativarScroll);
btnSubmit.addEventListener("click", validarCampos);
inputNome.addEventListener("input", removerErro);
inputEmail.addEventListener("input", removerErro);
inputAssunto.addEventListener("input", removerErro);
inputMsg.addEventListener("input", removerErro);