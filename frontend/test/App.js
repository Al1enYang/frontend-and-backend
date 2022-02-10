import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import Baidu1 from './pages/baidu_homepage/baidu1'
import Baidu2 from './pages/baidu_homepage/baidu2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Baidu1 />} />
        <Route path="b" element={<Baidu2 />} />
        <Route path="c" element={<C />}>
          <Route path="c1" element={<C1 />} >
            <Route path="cc1" element={<CC1 />} />
          </Route>
          <Route path="c2" element={<C2 />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

const A = () => (
  <div>A</div>
)
const B = () => (
  <div>B</div>
)
const C = () => (
  <div>
    <div>C</div>
    <div><Link to="/c/c1">c1</Link></div>
    <div><Link to="/c/c2">c2</Link></div>
    <Outlet />
  </div>
)

const C1 = () => {
  const ref = useRef(null)
  return(
    <div>
      <div>C1</div>
      <button onClick={()=>ref.current.click()}>cc1 button</button>
      <div className={'hide'}><Link to="/c/c1/cc1" ref={ref}>cc1</Link></div>
      <Outlet />
    </div>
  )
}

const C2 = () => (
  <div>C2</div>
)

const CC1 = () => (
  <div title='123'>CC1</div>
)