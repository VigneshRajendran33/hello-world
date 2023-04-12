import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import SignInComponent from './components/SignInComponent'

function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>
               <Route path="/login" element={<SignInComponent />}/>
               <Route path="/" element={<LoginComponent />}/>
               <Route path="/Dashboard" element={<DashboardComponent />}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
