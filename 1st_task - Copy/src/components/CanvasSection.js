import React from "react";
import "./CanvasSection.css";
import Moveable from "moveable";
import Selecto from "selecto";

const CanvasSection = () => {
  const moveable = new Moveable(document.body, {
    target:".target",
    draggable:true
  });

  moveable.on("drag", ({ target, transform }) => {
    target.style.transform = transform;
  });
  moveable.on("dragEnd", ({ target, isDrag }) => {
    console.log(target);
  });
  // const selecto = new Selecto({
  //   container: document.body,
  //   selectByClick: true,
  //   selectFromInside: false,
  // });
  // selecto
  //   .on("drag", (e) => {
  //     e.stop();
  //   })
  //   .on("select", (e) => {
  //     e.added.forEach((el) => {
  //       el.classList.add("selected");
  //     });
  //     e.removed.forEach((el) => {
  //       el.classList.remove("selected");
  //     });
  //   });
  return (
    <>
      <div className="target">Hello</div>
      <div className="canvas">
        <div>
          <h2>Canvas Section</h2>
        </div>
      </div>
    </>
  );
};

export default CanvasSection;
