import React from "react";
import "./LeftSection.css";
import interact from "interactjs";

const LeftSection = () => {
  var angle = 0;

  interact("#rotate-area").gesturable({
    onmove: function (event) {
      var arrow = document.getElementById("arrow");

      angle += event.da;

      arrow.style.transform = "rotate(" + angle + "deg)";

      document.getElementById("angle-info").textContent =
        angle.toFixed(2) + "\u00b0";
    },
  });
  return (
    <div className="left">
      <h2>Left Section</h2>
      <div id="rotate-area">
        <div id="angle-info">0&deg;</div>
        <svg id="arrow" viewbox="0 0 100 100">
          <polygon
            points="50,0 75,25 62.5,25 62.5,100 37.5,100 37.5,25 25,25"
            fill="#29e"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default LeftSection;
