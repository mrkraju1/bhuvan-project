import './App.css';
import Header from './components/forms';
import {BrowserRouter  as Router} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <Router>
    <div>
      <ToastContainer/>
      <Header />
    </div>
    </Router>

  );
}

export default App;
