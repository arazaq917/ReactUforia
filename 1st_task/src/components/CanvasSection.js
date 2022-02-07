import React, { useState, useRef } from "react";
import "./CanvasSection.css";
import Moveable from "react-moveable";
import { useSelector } from "react-redux";
import Selecto from "react-selecto";
import ContentEditable from "react-contenteditable";

const CanvasSection = () => {
  const [targetClass, setTargetClass] = useState("");
  const [frame, setFrame] = useState({
    translate: [0, 0],
    rotate: 0,
    transformOrigin: "50% 50%",
  });
  const selectoObj = useRef();
  const moveableObj = useRef();

  // console.log("SelectoObj", selectoObj);

  // console.log("moveableObj", moveableObj);
  const items = useSelector((state) => state.itemReducer.item);

  const resizeBox = () => {
    moveableObj.current.moveable.updateRect();
    selectoObj.current.selecto.options.getElementRect();
  };

  //------------Moveable Functions----------------

  const onDragOriginStart = (e) => {
    e.dragStart && e.dragStart.set(frame.translate);
  };
  const onDragOrigin = (e) => {
    frame.translate = e.drag.beforeTranslate;
    frame.transformOrigin = e.transformOrigin;
  };
  const onDragStart = (e) => {
    e.set(frame.translate);
  };
  const onDrag = (e) => {
    frame.translate = e.beforeTranslate;
  };
  const onRotateStart = (e) => {
    e.set(frame.rotate);
  };
  const onRotate = (e) => {
    frame.rotate = e.beforeRotate;
  };
  const onRender = (e) => {
    const { translate, rotate, transformOrigin } = frame;
    e.target.style.transformOrigin = transformOrigin;
    e.target.style.transform =
      `translate(${translate[0]}px, ${translate[1]}px)` +
      ` rotate(${rotate}deg)`;
  };
  const onResizeStart = (e) => {
    e.setOrigin(["%", "%"]);
    e.dragStart && e.dragStart.set(frame.translate);
  };
  const onResize = (e) => {
    const beforeTranslate = e.drag.beforeTranslate;
    frame.translate = beforeTranslate;
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  };

  //Selecto Functions

  const onSelect = (e) => {
    setTargetClass(e.selected[0]);
    e.added.forEach((el) => {
      el.classList.add("selected");
    });
    e.removed.forEach((el) => {
      el.classList.remove("selected");
    });
  };

  return (
    <>
      <div className="canvas">
        <div>
          <h2>Canvas Section</h2>
        </div>
        <div className="canvasBody">
          {items.map((i) => (
            <div
              contentEditable="true"
              suppressContentEditableWarning="true"
              className="test"
              onKeyPress={resizeBox}
              value={i}
            >
              {i}
            </div>
          ))}
        </div>
        <Moveable
          ref={moveableObj}
          target={targetClass}
          originDraggable={true}
          originRelative={true}
          draggable={true}
          throttleDrag={0}
          startDragRotate={0}
          throttleDragRotate={0}
          onUpdateRect={true}
          zoom={1}
          origin={true}
          padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
          resizable={true}
          rotatable={true}
          throttleRotate={0}
          rotationPosition={"top"}
          onDragOriginStart={onDragOriginStart}
          onDragOrigin={onDragOrigin}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onRotateStart={onRotateStart}
          onRotate={onRotate}
          onRender={onRender}
          onResizeStart={onResizeStart}
          onResize={onResize}
        />

        <Selecto
          ref={selectoObj}
          dragContainer={".canvasBody"}
          selectableTargets={[".canvasBody .test"]}
          hitRate={100}
          selectByClick={true}
          selectFromInside={false}
          ratio={0}
          onSelect={onSelect}
        ></Selecto>
      </div>
    </>
  );
};

export default CanvasSection;
