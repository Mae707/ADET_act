import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Gagawa tayo nito sa baba
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Path para sa Login (Walang Sidebar/Header) --- */}
        <Route path="/" element={<Login />} />

        {/* --- Path para sa Dashboard (Kasama ang Layout) --- */}
        <Route path="/dashboard" element={
          <div className="app-layout">
            <Sidebar />
            <main className="main-wrapper">
              <Header />
              <div className="page-body">
                <Dashboard />
              </div>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;