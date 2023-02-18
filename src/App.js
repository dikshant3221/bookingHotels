import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/Hotels/Hotel'

function App() {
  return (
   <Router>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/hotels" element={<List/>}/>
    <Route exact path="/hotels/:id" element={<Hotel/>}/>
   </Routes>
   </Router>
  );
}

export default App;
