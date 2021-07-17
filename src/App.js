import './styles/App.css';

import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Content() {
  const location = useLocation()

  return (
    <div className="fill content">
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
            <Route path='*'>
              <div>Error. Page Not Found.</div>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Content/>
    </Router>
  );
}

export default App;
