import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
