import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home';
import Movies from './pages/movies';
import Footer from './components/Footer';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <div className='App'>
    <Nav />
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/movies' exact element={<Movies />} />
      <Route path="/movies/:id" element={<MovieInfo  />} />
    </Routes>
    <Footer />
      </div>
    </Router>
  );
}

export default App;
