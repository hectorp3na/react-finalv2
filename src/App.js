import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home';
import Movies from './pages/movies';

function App() {
  return (
    <Router>
      <div className='App'>
    <Nav />
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/movies'  element={<Movies />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
