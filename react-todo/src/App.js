import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Todo from './component/Todo';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
