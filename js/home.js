document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const swiperjs = document.getElementById("swiperjs");
    const home = document.querySelector(".home");

    const heroObserve = new IntersectionObserver(
        entries => {
            const [entry] = entries;
            if (!entry.isIntersecting) {
                navbar.classList.add("active");
            } else {
                navbar.classList.remove("active");
            }
        },
        { threshold: 1 }
    );

    heroObserve.observe(home);

    new Typed(".type-writer", {
        strings: ["Web Developer", "Gamer", "Utraman"],
        typeSpeed: 80,
        loop: true,
        backSpeed: 50
    });

    new Swiper(".swiper-container", {
        slidesPerView: 1,
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: -100,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
});
