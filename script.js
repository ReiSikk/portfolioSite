"use strict";
import { animate, inView } from "https://cdn.skypack.dev/motion";

window.addEventListener("DOMContentLoaded", init);

function init() {
  animate("body", { opacity: [0, 1] }, { duration: 1.5 });
  //navigation bar animation
  animate("nav", { transform: ["translateY(-100px)", "translateY(0px)"] }, { duration: 0.6 });
}

//project link animation
inView(".card_left", (project) => {
  console.log(project.target);
  animate(
    project.target,
    {
      transform: ["translateY(100px)", "translateY(0px)"],
    },
    { duration: 0.6, easing: [0.17, 0.55, 0.55, 1] }
  );
});
inView(".card_right", (image) => {
  animate(
    image.target,
    {
      transform: ["translateY(100px)", "translateY(0px)"],
    },
    { duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }
  );
});

//footer border animation
inView(".separator", (border) => {
  animate(".separator", { scaleX: [0, 1] }, { duration: 1.5 });
});
//footer links animation
inView(".footer_links", (footer) => {
  animate(".footer_links a ", { opacity: [0, 1] }, { duration: 1, delay: 0.4 });
});
