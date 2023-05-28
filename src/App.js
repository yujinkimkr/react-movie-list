import Navbar from './components/Navbar';
import Home from './routes/Home';
import Popular from './routes/Popular';
import Top from './routes/Top';
import Content from './components/Content';
import OnScreen from './routes/OnScreen';
import { Link, Routes, Route } from "react-router-dom";
import Upcoming from './routes/Upcoming';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/onscreen" element={<OnScreen />} />
        <Route path="/top" element={<Top />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/content/:id" element={<Content />} />
        {/* <Route path="/newest" element={<Newest />} />
        <Route path="/top" element={<Top />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/action" element={<Action />} />
        <Route path="/comedy" element={<Comedy />} /> */}
      </Routes>
    </div>
  );
}

export default App;
