
import { createContext, useState } from 'react';
import './App.css';
import Grandfather from './Components/Grandfather/Grandfather';

export const RingContext = createContext('ring')
function App() {
  const[house, setHouse] =useState(1);
  const ornaments = 'Gold Ring';
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
      <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
      <Grandfather house={house} ornaments={ornaments}></Grandfather>
    </div>
    </RingContext.Provider>
  );
}

export default App;
