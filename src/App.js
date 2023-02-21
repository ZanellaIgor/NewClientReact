
import './App.css';
import NewClient from './pages/clients/new_client/NewClient';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import ListClient from './pages/clients/list_client/ListClient';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className='paginacao'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/clients/new_client' element={<NewClient />} />
          <Route path='/pages/clients/list_client' element={<ListClient />} />
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
