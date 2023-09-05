import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Card, Typography } from "@mui/material";
import ContentEditable from "react-contenteditable";
import { useRef, useState } from "react";
const style = { position: "relative" };

export default function Notecard({
  id,
  top,
  left,
  content,
  type,
  updateDocList,
}) {
  const text = useRef(content);
  function handleChange(e) {
    console.log(`Change: ${e.target.value}`);
    text.current = e.target.value;
  }
  function handleBlur(e) {
    e.preventDefault();
    console.log(`Blur: ${text.current}`);
    const cardData = {
      content: text.current,
    };
    updateDocList(id, cardData);
  }
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Card ref={drag} sx={{ ...style, left, top, p: 2, width: 200 }}>
      {/* <Typography>{content}</Typography> */}
      <ContentEditable
        html={text.current}
        onChange={handleChange}
        onBlur={handleBlur}
      ></ContentEditable>
    </Card>
  );
}
