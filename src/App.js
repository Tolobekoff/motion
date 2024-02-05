import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Uslugi from './pages/Uslugi/Uslugi';
import Partfol from './pages/Partfol/Partfol';
import Base from './pages/Base/Base';
import Sale from './pages/Sale/Sale'
import Servis from './pages/Site/Servis/Servis';
import Hero from './pages/Logos/Hero/Hero';



function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Servis/>}/>
      <Route path='/logo' element={<Hero/>}/>
      <Route path='/service' element={<Uslugi />}/>
      <Route path='/port' element={<Partfol/>}/>
      <Route path='/base' element={<Base/>}/>
      <Route path='/sale' element={<Sale/>}/>
     </Routes>

    </div>

  );
}

export default App;
