import { VFC } from "react";

const DndTextArea: VFC<{ componentName: string }> = (props) => {
  return (
    <textarea
      defaultValue={props.componentName}
      style={{ width: "calc(100% - 6px)", height: "calc(100% - 6px)" }}
    ></textarea>
  );
};

export default DndTextArea;
