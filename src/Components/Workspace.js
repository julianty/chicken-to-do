import uniqid from "uniqid";
import Notecard from "./Notecard";
import { ItemTypes } from "./ItemTypes.js";
import { useDrop } from "react-dnd";
import { Box } from "@mui/material";

function Workspace({ docList, moveCard, updateDocList }) {
  const [, drop] = useDrop(
    // When more complex DnD interactions are necessary, this will be the
    // hook that I need to change.
    () => ({
      accept: ItemTypes.CARD,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveCard(item.id, left, top);
        return undefined;
      },
      collect: (monitor) => ({
        // isOver: !!monitor.isOver(),
      }),
    }),
    [moveCard]
  );

  return (
    <Box sx={{ flexGrow: 1 }} ref={drop}>
      {Object.keys(docList).map((key) => {
        // Need to generalize this to accomodate things other than notes later
        const { left, top, content, type } = docList[key];
        return (
          <Notecard
            key={uniqid()}
            id={key}
            content={content}
            left={left}
            top={top}
            type={type}
            updateDocList={updateDocList}
          />
        );
      })}
    </Box>
  );
}

export default Workspace;
