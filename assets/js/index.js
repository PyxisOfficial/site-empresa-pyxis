const navbar = document.getElementById("navbar"),
    logo = document.getElementById("logo"),
    servicos = document.getElementsByClassName("navbar-links")[0],
    projetos = document.getElementsByClassName("navbar-links")[1],
    sobre = document.getElementsByClassName("navbar-links")[2],
    contato = document.getElementsByClassName("navbar-links")[3];

const activeScroll = () => {
    navbar.classList.toggle("navbar-ativo", scrollY > 0);
    logo.setAttribute("src", "assets/img/logo.png");
    servicos.classList.toggle("navbar-links-ativo", scrollY > 0);
    projetos.classList.toggle("navbar-links-ativo", scrollY > 0);
    sobre.classList.toggle("navbar-links-ativo", scrollY > 0);
    contato.classList.toggle("navbar-links-ativo", scrollY > 0);

    if (scrollY === 0) {
        logo.setAttribute("src", "assets/img/logo-branca.png");
    }
}

window.addEventListener("scroll", activeScroll);