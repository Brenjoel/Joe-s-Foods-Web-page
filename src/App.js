import './App.css';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import Base from './components/Base';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Ord from './components/Ord';
import Home from './components/Home';
import GetOrder from './components/GetOrder';

function HandleButton(){
  return (
  <>
  <h1 className='bg' > aefdff </h1>
  <GetOrder/>
  </>
  )
}
function App() {
  return (
     <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base/> }>
            <Route index element={<Home/> }/>
            <Route path='/Menu' element={<Menu/> }/>
            <Route path='/Ord' element={<Ord/> }/>
            <Route path='/getOrder' element={<GetOrder/> }/>
            <Route path='/Contact' element={<Contact/> }/>
          </Route>
        </Routes>
        </BrowserRouter>

    </>
    
  );
}

export default App;
