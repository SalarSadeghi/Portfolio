import { useRef } from "react";
import "./intro.scss";
import { useEffect } from "react";
import { init } from "ityped";

function Intro() {
  const textTypingRef = useRef();

  useEffect(() => {
    const typingEffect = {
      showCursor: false,
      strings: ["Web Developer", "Content Creator", "Blockchain"],
      backDelay: 1500,

    };
    init(textTypingRef.current, typingEffect);
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Salar Sadeghi</h1>
          <h3>
            Freelance <span ref={textTypingRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
