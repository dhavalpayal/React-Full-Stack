import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Component/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Component/ViewEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
          <div className="container">
      <switch>
        <Route path="/" Component={ListEmployeeComponent}></Route>
        <Route path="/employees" Component={ListEmployeeComponent}></Route>
        <Route path="/add-employee/:id" Component={CreateEmployeeComponent}></Route>
        <Route path="/view-employee/:id" Component={ViewEmployeeComponent}></Route>
        {/* <Route path="/update-employee/:id" Component={UpdateEmployeeComponent}></Route> */}
        </switch>
        </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
