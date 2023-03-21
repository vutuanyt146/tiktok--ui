import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Following from './pages/Following';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/following' element={<Following />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
