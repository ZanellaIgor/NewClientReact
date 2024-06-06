import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Home } from './pages/Home';
import ListClient from './pages/clients/list_client/ListClient';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/client/" element={<Home />} />
          <Route path="/client/form" element={<ListClient />} />
          {/*  <Route path="/client/form/:id/" element={<Home />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
