
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/pages/Login';

function App() {
  return (
    <>
    <Router> 
    <Navbar/>
    <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/login' component={Login}/>
       
    </Switch> 
     <Footer/>
</Router>   
    </>
  );
}

export default App;
