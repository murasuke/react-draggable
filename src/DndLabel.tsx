import { VFC } from 'react';

const DndTextArea: VFC<{ componentName: string }> = (props) => {
  return <span style={{ verticalAlign: 'middle' }}>{props.componentName}</span>;
};

export default DndTextArea;
