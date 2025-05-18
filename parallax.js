// GSAP and ScrollTrigger parallax effect for multiple sections

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // Logo intro animation
  const logoIntro = document.getElementById('logo-intro');
  const logoImage = document.getElementById('logo-image');
  const hero = document.querySelector('.hero');

  gsap.timeline()
    .to(logoImage, {opacity: 1, scale: 1, duration: 1.5, ease: "power2.out"})
    .to(logoImage, {opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "power2.in"})
    .to(logoIntro, {opacity: 0, duration: 0.5, onComplete: () => {
      logoIntro.style.display = 'none';
      gsap.to(hero, {opacity: 1, duration: 1});
    }});

  // Parallax for hero background
  gsap.to('.hero', {
    backgroundPosition: 'center 80%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Parallax for service items - move up slightly on scroll
  gsap.utils.toArray('.service-item').forEach((item) => {
    gsap.fromTo(
      item,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  });

  // Parallax for testimonial section - background moves slower
  gsap.to('.testimonial', {
    backgroundPosition: 'center 60%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.testimonial',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Parallax for advantages section - fade in and move up
  gsap.utils.toArray('.advantages').forEach((section) => {
    gsap.fromTo(
      section,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true,
        },
      }
    );
  });
});
