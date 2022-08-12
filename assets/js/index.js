const navbar = document.getElementById("navbar"),
    logo = document.getElementById("logo"),
    links = document.querySelectorAll(".navbar-links");

const activeScroll = () => {
    navbar.classList.toggle("navbar-ativo", scrollY > 0);
    logo.setAttribute("src", "assets/img/logo.png");

    links.forEach((e) => {
        e.classList.toggle("navbar-links-ativo", scrollY > 0);
    })

    if (scrollY === 0) {
        logo.setAttribute("src", "assets/img/logo-branca.png");
    }
}

window.addEventListener("scroll", activeScroll);