import React from "react";
import { useDrop } from "react-dnd";
import RenderElement from "../RenderElement/RenderElement";
import { BOX } from "../types";
import { getColumnClassName } from "../FbUtils";
import { Button } from "antd";

export default function DropzoneColumn({ t, row, column, elements }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: BOX,
    drop: () => ({ row, column }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  return (
    <div
      ref={drop}
      className={getColumnClassName(row)}
      style={{ position: "relative", border: "1px solid #ccc" }}
    >
      {isActive ? <div class="hover"></div> : <></>}
      {(() => {
        if (elements.length === 0) {
          return (
            <div class="text-center pt-2 pb-2">{t("leave elements here")}</div>
          );
        } else {
          return elements.map((el, index) => RenderElement(t, el));
        }
      })()}
    </div>
  );
}
