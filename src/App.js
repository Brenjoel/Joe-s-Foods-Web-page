import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Base from './components/Base';
import Contact from './components/Contact';
import GetOrder from './components/GetOrder';
import Home from './components/Home';
import Menu from './components/Menu';
import Ord from './components/Ord';

function HandleButton() {
  return (
    <>
      <h1 className='bg' > aefdff </h1>
      <GetOrder />
    </>
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base />}>
            <Route index element={<Home />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/Ord' element={<Ord />} />
            <Route path='/getOrder' element={<GetOrder />} />
            <Route path='/Contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
