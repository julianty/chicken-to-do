import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Card, Typography } from "@mui/material";

const style = { position: "relative" };

export default function Notecard({ id, top, left, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Card ref={drag} sx={{ ...style, left, top, p: 2, width: 200 }}>
      <Typography>{text}</Typography>
    </Card>
  );
}
