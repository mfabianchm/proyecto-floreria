//SCRIPT PARA NAV Y HERO

const menuBarsIcon = document.querySelector(".menu-bars-mobile");
const exitIconMobile = document.querySelector(".exit-icon-mobile");
const heroElementsOpacity = document.querySelector(".opacity-hero");

const menu_Links_Mobile = document.querySelector(".links-container-mobile");

menuBarsIcon.addEventListener("click", (e) => {
  menuBarsIcon.style.display = "none";
  exitIconMobile.style.display = "inline-block";
  menu_Links_Mobile.classList.add("links-container-mobile-appear");
  heroElementsOpacity.classList.add("opacity-click");
});

exitIconMobile.addEventListener("click", (e) => {
  exitIconMobile.style.display = "none";
  menuBarsIcon.style.display = "inline-block";
  menu_Links_Mobile.classList.remove("links-container-mobile-appear");
  heroElementsOpacity.classList.remove("opacity-click");
});

window.addEventListener("resize", (e) => {
  const width = window.innerWidth;
  if (width > 900) {
    menuBarsIcon.style.display = "none";
  } else {
    menuBarsIcon.style.display = "inline-block";
  }
});

// ANIMACIONES DEL SITIO CON GSAP

gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({ defaults: { duration: 1 } });
heroTimeline
  .from(".hero-container", {
    ease: "power1.out",
    opacity: 0,
  })
  .from(".header-container", {
    x: "-100%",
  })
  .from(".link-nav-itself", {
    ease: "power1.out",
    opacity: 0,
    stagger: 0.5,
  })
  .from(
    ".first-text-hero-left",
    {
      y: 200,
      ease: "power1.out",
      opacity: 0,
    },
    1
  )
  .from(
    ".image-hero",
    {
      ease: "power1.out",
      opacity: 0,
      y: "20px",
      stagger: 0.5,
    },
    ">"
  )
  .from(
    ".button-comenzar",
    {
      y: 200,
      duration: 1,
      ease: "power1.out",
      delay: 2,
      opacity: 0,
    },
    "<"
  );

let tlNosotros = gsap.timeline({
  scrollTrigger: {
    trigger: ".h1-text-nosotros-section",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlNosotros
  .from(".h1-text-nosotros-section", { y: 100, opacity: 0 })
  .from(".rcn01", { y: 100, opacity: 0 })
  .from(".img-nosotros-animation-01", { y: 100, opacity: 0, stagger: 0.5 });

let tlNosotros02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".h2-tdn-02",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlNosotros02
  .from(".h2-text-description-nosotros", { y: 100, opacity: 0 })
  .from(".rcn02", { y: 100, opacity: 0 })
  .from(".img-nosotros-animation-02", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.5,
  });

let tlAlianzas = gsap.timeline({
  scrollTrigger: {
    trigger: ".h2-text-nosotros",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlAlianzas
  .from(".h1-text-nosotros", { opacity: 0, x: "-100%" })
  .from(".h2-text-nosotros", { opacity: 0, x: "-100%" })
  .from(".p-text-nosotros", { opacity: 0, x: "-100%" });

let tlAlianzas02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-clientes",
    start: "top center",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlAlianzas02
  .from(".text-clientes", { opacity: 0, x: "100%" })
  .from(".client-image", { opacity: 0, y: 100, stagger: 0.5 });

let tlAlianzas03 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-nosotros",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlAlianzas03.from(".image-nosotros", { opacity: 0, x: "-100%", scale: 0 });

let tlservicios = gsap.timeline({
  scrollTrigger: {
    trigger: ".p-text-servicios",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlservicios
  .from(".h1-text-servicios", { opacity: 0, y: 100, scale: 0 })
  .from(".p-text-servicios", { opacity: 0, y: 100, scale: 0 })
  .from(".grid-element-servicios", {
    opacity: 0,
    y: 100,
    scale: 0,
    stagger: 0.7,
  })
  .from(".button-servicios", { opacity: 0, y: 100, scale: 0 }, ">");

let tlContacto = gsap.timeline({
  scrollTrigger: {
    trigger: ".form",
    ease: "power1.inOut",
    duration: 1,
  },
});

tlContacto
  .from(".contactanos-text", { opacity: 0, y: 100 })
  .from(".form", { opacity: 0, y: 100, scale: 0 });
