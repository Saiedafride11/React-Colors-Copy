import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Developer from './components/Developer/Developer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
              <Route exact path="/">
                 <Home></Home>
              </Route>
              <Route path="/home">
                 <Home></Home>
              </Route>
              <Route path="/developer">
                 <Developer></Developer>
              </Route>
              <Route path="*">
                 <NotFound></NotFound>
              </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;


// npm install use-sound
