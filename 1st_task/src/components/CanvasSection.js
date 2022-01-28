import React from "react";
import "./CanvasSection.css";
import interact from "interactjs";

const CanvasSection = () => {
  const position = { x: 0, y: 0 };
  const moveText = interact(".draggable");
  moveText.draggable({
    origin: "parent",
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
    listeners: {
      move(event) {
        position.x += event.dx;
        position.y += event.dy;
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });
  moveText.resizable({
    edges: { top: true, bottom: true, left: true, right: true },
    // invert: 'reposition',
    // modifiers: [
    //   interact.modifiers.aspectRatio({
    //     // ratio: 2,
    //     // modifiers: [interact.modifiers.restrictSize({ max: "parent" })],
    //   }),
    // ],
    listeners: {
      move(event) {
        let { x, y } = event.target.dataset;
        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate${x}px, ${y}px`,
        });
        Object.assign(event.target.dataset, { x, y });
      },
    },
  });
  return (
    <div className="canvas">
      <div>
        <h2>Canvas Section</h2>
      </div>
      <div className="draggable">
        <p>Play with me!!</p>
      </div>
    </div>
  );
};

export default CanvasSection;
