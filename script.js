"use strict";

import { animate, inView } from "https://cdn.skypack.dev/motion";
/* 
inView("article", ({ target }) => {
  animate(
    target.querySelector("h3"),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
}); */

inView(".project_card h3", (header) => {
  console.log(header.target);
  animate(header.target, {
    transform: ["translateX(-200px)", "translateX(0px)"],
    duration: "1s",
  });
});
