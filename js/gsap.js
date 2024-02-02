document.addEventListener('DOMContentLoaded', () => {
    /*
    const navbar = document.getElementById("navbar");

    navbar.addEventListener("click", () => {
        gsap.to("#navbar-content", {
            duration: 1,
            left: 0,
            ease: "power3.inOut"
        });
    });

    gsap.to(".anim-text", {
        duration: 1,
        rotate: 20,
        ease: "power3.inOut"
    });
    */

    const line = gsap.timeline();
    const line2 = gsap.timeline();

    document.querySelector('.aduhai').style.opacity = '0';
    document.querySelector('body').style = 'overflow: hidden';
    setTimeout(function () {
        document.querySelector('.aduhai').style.opacity = '1';
    }, 1000);

    setTimeout(function () {
        line2.add(
            line2.to('.loading-animation', {
                duration: 0.5,
                opacity: 0,
                ease: 'none',
                onComplete() {
                    document.querySelector('body').style = 'overflow: auto';
                    document.querySelector('.loading-animation').style.display =
                        'none';
                }
            })
        );
    }, 3000);

    line.add(
        line.to('.svg-image', {
            duration: 4,
            y: '-10px',
            ease: 'power3.inOut'
        })
    )
        .add(
            line.to('.svg-image', {
                duration: 4,
                y: '10px',
                ease: 'power3.inOut'
            })
        )
        .add(
            line.to('.svg-image', {
                duration: 2,
                y: '0',
                ease: 'power3.in',
                onComplete() {
                    line.play(0);
                }
            })
        );

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#text-big', {
        scrollTrigger: {
            trigger: '#text-big',
            endTrigger: '.dashboard',
            start: 'top 5%',
            end: 'bottom 90%',
            // markers: true,
            scrub: 2
        },
        duration: 1,
        x: '-100%',
        y: '-100%',
        ease: 'none'
    });

    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            endTrigger: '.dashboard',
            start: 'top 5%',
            end: 'bottom 90%',
            // markers: true,
            scrub: 1
        },
        duration: 1,
        y: -100,
        ease: 'none'
    });

    const configs = {
        duration: 30,
        ease: 'none'
    };

    const lines = {
        first: {
            direction: 'right',
            element: document.querySelector('#marquee-first-line')
        },
        second: {
            direction: 'left',
            element: document.querySelector('#marquee-second-line')
        }
    };

    let timeline = gsap.timeline();
    let sentenceWidth =
        document.querySelector('.marquee__sentence').clientWidth;

    function init() {
        setTimeline();
        window.addEventListener('resize', handleResize);
    }

    function setTimeline() {
        timeline
            .add(createMarquee(lines.first.element, lines.first.direction), 0)
            .add(
                createMarquee(lines.second.element, lines.second.direction),
                0
            );
    }

    function createMarquee(element, direction) {
        const waktu = element.getAttribute('data-time');
        const distance = sentenceWidth * waktu;
        return gsap.timeline().to(element, {
            ...configs,
            x: direction === 'left' ? distance : -distance,
            onComplete() {
                timeline.play(0);
            },
            onReverseComplete() {
                timeline.reverse(0);
            }
        });
    }

    function flipDirection() {
        timeline.reversed(!timeline.reversed());
    }

    function handleResize() {
        sentenceWidth =
            document.querySelector('.marquee__sentence').clientWidth;
        timeline.seek(0);
        timeline.clear();
        setTimeline();
    }

    init();
});
