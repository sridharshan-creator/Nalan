import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollEffects() {
  useEffect(() => {
    // ==========================================
    // LENIS SMOOTH SCROLL
    // ==========================================

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    // ==========================================
    // SECTION REVEAL
    // ==========================================

    const sections = gsap.utils.toArray(".travel-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0.7,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );
    });


    // ==========================================
    // FLOATING ELEMENTS
    // ==========================================

    const floatingElements = gsap.utils.toArray(
      ".scroll-float"
    );

    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: index % 2 === 0 ? -100 : 100,
        rotate: index % 2 === 0 ? 5 : -5,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });


    // ==========================================
    // PARALLAX BACKGROUNDS
    // ==========================================

    const parallaxElements = gsap.utils.toArray(
      ".scroll-parallax"
    );

    parallaxElements.forEach((element) => {
      gsap.to(element, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });


    // ==========================================
    // CLEANUP
    // ==========================================

    return () => {
      lenis.destroy();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return null;
}

export default ScrollEffects;