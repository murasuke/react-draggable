import { VFC, useState, useContext } from 'react';
import GridLayout from 'react-grid-layout';
import { DndContext } from './DndReducer';
import DndTextArea from './DndTextArea';
import DndLabel from './DndLabel';

const elemStyle = {
  border: 'solid',
  backgroundColor: '#EEEEEE',
  textAlign: 'center' as 'center',
};

type ControlType = 'label' | 'textarea';

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
  const { state } = useContext(DndContext);
  const [log, setLog] = useState<string>();
  const { childsLayouts: layouts, cols, rowHeight, width } = props;

  const onLayoutChangeHandler = (layout: GridLayout.Layout[]) => {
    console.log(JSON.stringify(layout, null, '\t'));
    console.log(JSON.stringify(state, null, '\t'));
    setLog(
      JSON.stringify(state, null, '\t') +
        '\n' +
        JSON.stringify(layout, null, '\t'),
    );
  };

  return (
    <>
      <GridLayout
        className="layout"
        layout={layouts}
        cols={cols}
        rowHeight={rowHeight}
        width={width}
        onLayoutChange={onLayoutChangeHandler}
      >
        {layouts.map((e) => {
          if (e?.type === 'label') {
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
      <pre>{log}</pre>
    </>
  );
};

export default DragDropLayout;
