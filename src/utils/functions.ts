import gsap from "gsap";

export const ScrollTop = (id: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: id, offsetY: 100 },
    ease: "expo.inOut",
  });
};
