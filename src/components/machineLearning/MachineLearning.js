import React from "react"
import { Route, Switch, Link } from "react-router-dom"

import RandomNotes from "./RandomNotes"
import Introduction from "./neuralNetworks/Introduction"
import TextMiningIntroduction from "./textmining/Introduction"

const MachineLearning = ({ match }) => (
  <div>
    <h2>MachineLearning</h2>
    <Link to={`${match.url}/random`}>Random Notes</Link><br />
    <Link to={`${match.url}/neural`}>Classification - Whats the story with neural networks</Link><br />
    <Link to={`${match.url}/textmining`}>TextMining - Whats the story with unstructured text</Link>
    <Switch>
      <Route path={[`${match.path}/random`,`${match.path}/randomnotes`]} component={RandomNotes} />
      <Route path={[`${match.path}/neural`,`${match.path}/nn/intro`]} component={Introduction} />
      <Route path={[`${match.path}/textmining`,`${match.path}/tm/intro`]} component={TextMiningIntroduction} />
     </Switch>
    <Route />
  </div>
) 

export default MachineLearning