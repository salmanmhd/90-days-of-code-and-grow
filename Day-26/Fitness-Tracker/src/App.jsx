import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Workouts from './components/Workouts';
import Progress from './components/Progress';
import Goals from './components/Goals';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col bg-gray-100'>
        <Header />
        <main className='flex-1 container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/progress' element={<Progress />} />
            <Route path='/goals' element={<Goals />} />
            <Route path='/workouts' element={<Workouts />} />
            <Route path='*' element={<p>Error Loading page</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
