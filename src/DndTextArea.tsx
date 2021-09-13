import { VFC, useContext } from 'react';
import { DndContext } from './DndReducer';

const DndTextArea: VFC<{ componentName: string }> = (props) => {
  const { dispatch } = useContext(DndContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: 'CHANGE_VALUE',
      id: e.target.id,
      value: e.target.value,
    });
  };

  return (
    <textarea
      id={props.componentName}
      style={{ width: 'calc(100% - 6px)', height: 'calc(100% - 6px)' }}
      onChange={handleChange}
    ></textarea>
  );
};

export default DndTextArea;
