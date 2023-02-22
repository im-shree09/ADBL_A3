import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import Login from './Login';
import Signup from './Signup';
import Incorrect from './Incorrect';
import Home1 from './Home1';
import StudentDetails from './StudentDetails';
import Advisor from './Advisor';
import TeacherForm from './TeacherForm';
import StudentForm from './StudentForm';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/teacher'>
              <Home1/>
            </Route>
            <Route exact path='/'>
              <Login/>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/incorrect'>
              <Incorrect/>
            </Route>
            <Route exact path='/signup'>
              <Signup/>
            </Route>
            <Route exact path='/student'>
              <StudentDetails/>
            </Route>
            <Route exact path='/advisor'>
              <Advisor/>
            </Route>
            <Route exact path='/teacherform'>
              <TeacherForm/>
            </Route>
            <Route exact path='/studentform'>
              <StudentForm/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
