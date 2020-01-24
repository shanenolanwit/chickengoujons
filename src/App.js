import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import Goujons from "./components/Goujons"
import MachineLearning from "./components/machineLearning/MachineLearning"
import NotFound from "./components/NotFound"
import Thesis from "./components/thesis/Thesis"
import PaperIndex from "./components/thesis/PaperIndex"

import Sample from "./components/thesis/papers/sample/paper"
import Architecture from "./components/thesis/Architecture"

import Navbar from "./components/ui/Navbar"

function App() {
    return (
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/goujons" component={Goujons} />
              <Route path="/home" component={Home} />
              <Route path={["/machinelearning", "/ml"]} component={MachineLearning} />

              <Route exact path="/thesis" component={Thesis} />
              <Route exact path="/thesis/architecture" component={Architecture} />
              <Route exact path="/thesis/papers" component={PaperIndex} />
              <Route exact path="/thesis/papers/sample" component={Sample} />


              <Route component={NotFound} />
            </Switch>
          </div>
           
        </div>
    )
}

export default App