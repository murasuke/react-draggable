import { VFC } from "react";
import GridLayout from "react-grid-layout";
import DndTextArea from "./DndTextArea";
import DndLabel from "./DndLabel";

const elemStyle = {
  border: "solid",
  backgroundColor: "#EEEEEE",
  textAlign: "center" as "center",
};

type ControlType = "label" | "textarea";

type ChildLayouts = {
  cols: number;
  rowHeight: number;
  width: number;
  childsLayouts: {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    type?: ControlType;
  }[];
};

const DragDropLayout: VFC<ChildLayouts> = (props) => {
  const { childsLayouts: layouts, cols, rowHeight, width } = props;

  return (
    <GridLayout
      className="layout"
      layout={layouts}
      cols={cols}
      rowHeight={rowHeight}
      width={width}
    >
      {layouts.map((e) => {
        if (e?.type === "label") {
          return (
            <div key={e.i} style={elemStyle}>
              <DndLabel componentName={e.i.toUpperCase()} />
            </div>
          );
        } else {
          return (
            <div key={e.i} style={elemStyle}>
              <DndTextArea componentName={e.i.toUpperCase()} />
            </div>
          );
        }
      })}
    </GridLayout>
  );
};

export default DragDropLayout;
