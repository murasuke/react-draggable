import { VFC } from 'react';

const center = {
  margin: 'auto',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: 'absolute' as const,
  height: '20px',
};

const DndTextArea: VFC<{ componentName: string }> = (props) => {
  return <span style={center}>{props.componentName}</span>;
};

export default DndTextArea;
