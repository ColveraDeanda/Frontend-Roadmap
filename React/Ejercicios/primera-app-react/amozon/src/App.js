import React from 'react';
import './App.css'
import List from './components/list';
import Menu from './components/menu';


function App() {
  return (
    <div className='app'>
        <Menu></Menu>
        <List></List>
    </div>
  );
}

export default App;
