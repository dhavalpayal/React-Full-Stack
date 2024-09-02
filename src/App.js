import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
          <div className="container">
      <switch>
        <Route path="/" Component={ListEmployeeComponent}></Route>
        <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <ListEmployeeComponent/>
        </switch>
        </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
