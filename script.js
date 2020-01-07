const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');


    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav_active');

        //Animate links, slide ind
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();
