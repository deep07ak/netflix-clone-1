
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import VideoPop from './components/VideoPop';
import Browse from './pages/Browse';
function App(){
  
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path='/browse/:platform' element={<Browse />}></Route>
      </Routes>
      <VideoPop />
    </BrowserRouter>
  );
}


export default App;
