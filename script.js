"use strict";

import { animate, scroll, stagger, timeline } from "https://cdn.skypack.dev/motion";

window.addEventListener("DOMContentLoaded", start);

//* INITIALIZE
async function start() {
  document.querySelectorAll(".project_card").forEach((card) => card.addEventListener("mouseover", timeline));
}
//animate(".box", { scale: 2 }, { duration: 2 });

// Progress bar representing gallery scroll
//scroll(animate(".progress", { scaleX: [0, 1] }));

/* function cardOverlay(event) {
  let activeCard = event.target;
  //console.log(event.target);
  console.log("cardOverlay triggered");
  const header = activeCard.querySelector("h3");
  animate(
    header,
    { transform: ["translateY(200%)", "translateY(0%)"] },
    {
      opacity: 1,
    },
    {
      target: header,
    },
    { animation }
  );
} */

// card animation
const sequence = [
  [".card_header", { translateY: [200, 0] }, { duration: 0.3 }],
  [".card_header", { opacity: 1 }, { duration: 0.2 }, { at: -0.5 }],
];
scroll(timeline(sequence));
