import { FC } from 'react';
import { DndContextProvider } from './DndReducer';
import DragDropLayout from './DragDropLayout';
import './App.css';

const childsLayouts = [
  { i: 'タイトル1', x: 0, y: 0, w: 2, h: 1, type: 'label' as 'label' },
  { i: 'b', x: 2, y: 0, w: 6, h: 1 },
  { i: 'c', x: 2, y: 0, w: 6, h: 2 },
  { i: 'タイトル2', x: 0, y: 2, w: 2, h: 2, type: 'label' as 'label' },
  { i: 'e', x: 0, y: 9, w: 5, h: 5 },
  { i: 'f', x: 5, y: 11, w: 3, h: 3 },
];

const App: FC = () => {
  const layout = {
    cols: 20,
    rowHeight: 30,
    width: window.parent.screen.width,
    childsLayouts,
  };

  return (
    <DndContextProvider>
      <DragDropLayout {...layout} />
    </DndContextProvider>
  );
};

export default App;
