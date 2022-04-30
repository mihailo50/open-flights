import './App.css';
import Airlines from './components/Airlines/Airlines';
import Airline from './components/Airlines/Airline';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Airlines />} />
      <Route exact path='http://127.0.0.1:3000/api/v1/airlines/:slug' element={<Airline />} />
    </Routes>
  );
}

export default App;
