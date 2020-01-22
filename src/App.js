import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import Goujons from "./components/Goujons"
import MachineLearning from "./components/MachineLearning"
import NotFound from "./components/NotFound"
import Thesis from "./components/thesis/Thesis"
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
              <Route path="/thesis" component={Thesis} />
              <Route component={NotFound} />
            </Switch>
          </div>
           
        </div>
    )
}

export default App