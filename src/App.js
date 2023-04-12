import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';


function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>
               {/* <Route path="/signup" element={<Signup/>}/> */}
               <Route path="/login" element={<LoginComponent />}/>
               <Route path="/Dashboard" element={<DashboardComponent />}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
