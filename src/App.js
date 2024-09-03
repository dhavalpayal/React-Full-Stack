import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
          <div className="container">
      <switch>
        <Route path="/" Component={ListEmployeeComponent}></Route>
        <Route path="/employees" Component={ListEmployeeComponent}></Route>
        <Route path="/add-employee" Component={CreateEmployeeComponent}></Route>
        </switch>
        </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
