import { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";

import "../App.css";

const AnimatedPage = () => {
  const logoItem = useRef<HTMLImageElement>(null);
  const textItem = useRef<HTMLHeadingElement>(null);
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);
  let app = useRef(null);

  const [circleAnimation, setCircleAnimation] = useState(false);

  useEffect(() => {
    // console.log(logoItem);
    TweenMax.to(app.current, 0, { css: { visibility: "visible" } });
    if (logoItem.current) {
      TweenMax.to(logoItem.current, 0.8, {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      });
    }

    if (textItem.current) {
      TweenMax.to(textItem.current, 0.8, {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      });
    }

    //console.log(circle1, circle2, circle3);
    TweenMax.from(circle1.current, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
    });
    TweenMax.to(circle2.current, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.to(circle3.current, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  const handleExpand = () => {
    TweenMax.to(circle1.current, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });

    setCircleAnimation(true);
  };

  const handleShrink = () => {
    TweenMax.to(circle1.current, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });

    setCircleAnimation(false);
  };

  // The logoItem ref is used to animate the logo
  // The logo is animated using the GSAP library
  // The useEffect hook is used to animate the logo when the component mounts

  return (
    <div
      ref={app}
      className="
      h-screen
      flex
      flex-col
      justify-center
      items-center
      bg-gradient-to-r
      from-green-400
      to-blue-500
      text-white
      font-bold
      gap-10
    "
    >
      <img
        ref={logoItem}
        src="https://th.bing.com/th/id/OIP.vVaPGP1SVemy8Fpc7vPHNQAAAA?w=182&h=180&c=7&r=0&o=5&pid=1.7"
        alt="logo"
      />
      <h1
        className="text-4xl font-bold opacity-0 transition-all duration-1000 ease-in-out"
        ref={textItem}
      >
        Hi there! I'm Tasmin.
      </h1>
      <div className="flex justify-around mt-8 flex-col gap-5">
        <div
          ref={circle1}
          onClick={circleAnimation !== true ? handleExpand : handleShrink}
          className="w-8 h-8 bg-blue-800 rounded-full text-center cursor-pointer"
        >
          1
        </div>
        <div
          ref={circle2}
          className="w-8 h-8 bg-green-800 rounded-full text-center cursor-pointer"
        >
          2
        </div>
        <div
          ref={circle3}
          className="w-8 h-8 bg-red-800 rounded-full text-center cursor-pointer"
        >
          3
        </div>
      </div>
    </div>
  );
};

export default AnimatedPage;
