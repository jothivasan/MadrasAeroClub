import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Events from './pages/Events';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
