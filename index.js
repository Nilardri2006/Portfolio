// Custom Cursor Animation
        const cursor = document.querySelector("#cursor");
        const cursorBlur = document.querySelector("#cursor-blur");
        document.addEventListener("mousemove", function (dets) {
            gsap.to(cursor, { x: dets.x, y: dets.y, duration: 0.2 });
            gsap.to(cursorBlur, { x: dets.x - 200, y: dets.y - 200, duration: 0.5 });
        });

        // Nav and Main Background Scroll Animations
        gsap.to("#nav", {
            backgroundColor: "#000",
            duration: 0.5,
            height: "100px",
            scrollTrigger: {
                trigger: "#nav",
                scroller: "body",
                start: "top -10%",
                end: "top -11%",
                scrub: 1
            }
        });

        gsap.to("#main", {
            backgroundColor: "#000",
            scrollTrigger: {
                trigger: "#main",
                scroller: "body",
                start: "top -25%",
                end: "top -70%",
                scrub: 2
            }
        });

        // Responsive Mouse-Move Parallax for Hero Section
        const heroPage = document.querySelector("#page1");
        heroPage.addEventListener("mousemove", function (e) {
            if (window.innerWidth > 768) { // Only apply on larger screens
                const { width, height } = heroPage.getBoundingClientRect();
                const x = e.clientX - width / 2;
                const y = e.clientY - height / 2;

                gsap.to(".hero-text h1, .hero-text h2, .resume-btn", {
                    x: -x * 0.03,
                    y: -y * 0.03,
                    ease: "power2.out"
                });
                gsap.to(".profile-photo", {
                    x: x * 0.04,
                    y: y * 0.04,
                    ease: "power2.out"
                });
            }
        });

        // One-by-one animation for all sections
        gsap.utils.toArray('.page').forEach(page => {
            gsap.from(page.querySelectorAll(".anim-item"), {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: page,
                    scroller: "body",
                    start: "top 75%", // Start animation a bit earlier
                    toggleActions: "play none none none"
                }
            });
        });
        (function () {
            emailjs.init("tIjALvN_hYwqJ9lso"); // From EmailJS dashboard
        })();

        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm('service_hhtpaar', 'template_390wyuj', this)
                .then(() => {
                    alert("Message sent successfully!");
                    this.reset();
                }, (error) => {
                    console.error('FAILED...', error);
                    alert("Failed to send message. Try again.");
                });
        });