import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hook';
import {increment , decrement} from "./redux/slices/counter/Counter"
import Mycomponent from './Mycomponent';
import MySecondcom from './MySecondcom';
function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
                <div className="App">

<img src={logo} className="App-logo" alt="logo" />
<h1>|| COUNTER ||</h1>
<p>count  is</p>
<h1>{count}</h1>
<button onClick={() => dispatch(increment())}>INCREMENT</button>
<button onClick={() => dispatch(decrement())}>DECREMENT</button>

</div>

<Mycomponent/>

<MySecondcom/>
    </>
  );
}

export default App;
