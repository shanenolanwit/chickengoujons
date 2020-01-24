import React from "react"
import { Route, Switch, Link } from "react-router-dom"

import RandomNotes from "./RandomNotes"

const MachineLearning = ({ match }) => (
  <div>
    <h2>MachineLearning</h2>
    <Link to={`${match.url}/random`}>
      Random Notes
    </Link>
    <Switch>
      <Route path={[`${match.path}/random`,`${match.path}/randomnotes`]} component={RandomNotes} />
     </Switch>
    <Route />
  </div>
) 

export default MachineLearning