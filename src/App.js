
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router> 
    <Navbar/>
    <Switch>
       <Route exact path='/' component={Home}/>
       
    </Switch> 
     <Footer/>
</Router>   
    </>
  );
}

export default App;
