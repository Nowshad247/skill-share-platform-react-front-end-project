import './App.css';
import logo from './logo.png';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/Header/Header';
import NotFound from './component/Notfound/NotFound';
import About from './component/About/About';
import Services from './component/Servics/Services';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import CourcesDatails from './component/CourcesDatails/CourcesDatails';


function App() {
  return (
    <div className="container">
      <Router>
        <Header img={logo}></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/Services">
            <Services></Services>
          </Route>
          <Route exact path="/contact-us">
            <Contact></Contact>
          </Route>
          <Route exact path="/courcesdatails/:id">
            <CourcesDatails></CourcesDatails>
          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
