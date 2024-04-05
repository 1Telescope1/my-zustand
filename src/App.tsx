import React from 'react';
import './App.css';
import useTestStore from './store';
import { shallow } from './zustand';

const Test1 = () => {
  const { text, setTest } = useTestStore() as any;
  console.log('test1');
  const onChange = (e: any) => {
    setTest(e.target.value);
  };

  return (
    <div>
      <div>
        {' '}
        <input type="input" onChange={onChange} />
      </div>
      <div>我是test1: {text}</div>
    </div>
  );
};

const Test2 = () => {
  const { count, name } = useTestStore(
    (state: any) => ({
      name: state.name,
      count: state.count
    }),
    shallow
  ) as any;
  console.log('test2');

  return (
    <div>
      我是test2: {count} {name}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Test1 />
      <Test2 />
    </div>
  );
}

export default App;
