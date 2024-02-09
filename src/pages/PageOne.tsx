import { useRef, useEffect } from "react";

import People from "../assets/people.webp";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "../PageOne.scss";

const PageOne = () => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  });

  return (
    <section className="main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="container" ref={container}>
        <>
          <div className="img-container">
            <img ref={image} src={People} />
          </div>
        </>
      </div>
    </section>
  );
};

export default PageOne;
