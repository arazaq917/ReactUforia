import Moveable from "moveable";
import React, { Component } from "react";
import "./mainComponent.css";

class MainComponent extends Component {
  render() {
    const movable = new Moveable(document.body, {
      target: document.querySelector(".target"),
      // If the container is null, the position is fixed. (default: parentElement(document.body))
      container: document.body,
      draggable: true,
      resizable: true,
      scalable: true,
      rotatable: true,
    });
    movable
      .on("dragStart", ({ target }) => {
        console.log("onDragStart", target);
      })
      .on(
        "drag",
        ({
          target,
          transform,
          left,
          top,
          right,
          bottom,
          beforeDelta,
          beforeDist,
          delta,
          dist,
          clientX,
          clientY,
        }) => {
          console.log("onDrag left, top", left, top);
          target.style.left = `${left}px`;
          target.style.top = `${top}px`;
          // console.log("onDrag translate", dist);
          // target!.style.transform = transform;
        }
      )
      .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
        console.log("onDragEnd", target, isDrag);
      });
    return (
      <>
        <div className="container">
          <div className="target">Target</div>
        </div>
      </>
    );
  }
}
export default MainComponent;
