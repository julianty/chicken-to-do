import update from "immutability-helper";
import uniqid from "uniqid";
import Notecard from "./Notecard";
import { ItemTypes } from "./ItemTypes.js";
import { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import { Box } from "@mui/material";

function Workspace() {
  const [notes, setNotes] = useState({
    // Later, need to load this data from a database
    randomId1: {
      top: 20,
      left: 20,
      text: "I am card 1",
    },
    randomId2: {
      top: 30,
      left: 30,
      text: "I am card 2",
    },
  });

  const moveBox = useCallback(
    (id, left, top) => {
      setNotes(
        update(notes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [notes, setNotes]
  );

  const [, drop] = useDrop(
    // When more complex DnD interactions are necessary, this will be the
    // hook that I need to change.
    () => ({
      accept: ItemTypes.CARD,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
      collect: (monitor) => ({
        // isOver: !!monitor.isOver(),
      }),
    }),
    [moveBox]
  );

  return (
    <Box sx={{ flexGrow: 1 }} ref={drop}>
      {Object.keys(notes).map((key) => {
        // Need to generalize this to accomodate things other than notes later
        const { left, top, text } = notes[key];
        return (
          <Notecard key={uniqid()} id={key} text={text} left={left} top={top} />
        );
      })}
    </Box>
  );
}

export default Workspace;
