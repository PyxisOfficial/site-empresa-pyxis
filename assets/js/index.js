const navbar = document.getElementById("navbar"),
    logo = document.getElementById("logo"),
    linhasMenu = document.querySelectorAll(".line"),
    navbarList = document.querySelector(".navbar-list"),
    links = document.querySelectorAll(".navbar-links");

const activeScroll = () => {
    navbar.classList.toggle("navbar-ativo", scrollY > 0);
    navbarList.classList.toggle("navbar-list-branco", scrollY > 0)

    links.forEach((link) => {
        link.classList.toggle("navbar-links-ativo", scrollY > 0);
    })

    linhasMenu.forEach((line) => {
        line.classList.toggle("line-ativo", scrollY > 0);
    })

    if (scrollY === 0) {
        logo.setAttribute("src", "assets/img/logo-branca.png");
    } else {
        logo.setAttribute("src", "assets/img/logo.png");
    }
}
window.addEventListener("scroll", activeScroll);

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