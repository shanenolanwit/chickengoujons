// Core react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

//styling

import './index.css';

//custom components
import Goujons from './components/goujons'
import Home from './components/home'
import MachineLearning from './components/machineLearning'
import Thesis from './components/thesis/thesis'
import ThesisPapers from './components/thesis/papers'
import NotFound from './components/notFound'

import Navbar from './components/ui/navbar'

import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
        <Navbar />
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/goujons">Goujons</Link>
        </li>
        <li>
          <Link to="/machinelearning">Machine Learning</Link>
        </li>
        <li>
          <Link to="/thesis">Thesis</Link>
        </li>
      </ul>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/goujons" component={Goujons} />
        <Route path="/home" component={Home} />
        <Route path={["/machinelearning", "/ml"]} component={MachineLearning} />
        <Route exact path={["/thesis"]} component={Thesis} />
        <Route path="/thesis/papers" component={ThesisPapers} />
        <Route path="/thesis/papers" component={ThesisPapers} />
        <Route component={NotFound} />
      </Switch>
       
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
