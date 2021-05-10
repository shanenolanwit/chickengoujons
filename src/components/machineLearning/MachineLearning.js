import React from "react"
import { Route, Switch, Link } from "react-router-dom"

import RandomNotes from "./RandomNotes"
import Introduction from "./neuralNetworks/Introduction"
import TextMiningIntroduction from "./textmining/Introduction"
import NLGIntro from "./textmining/NlgOneOhOne"

const MachineLearning = ({ match }) => (
  <div>
    <h2>MachineLearning</h2>
    <Link to={`${match.url}/random`}>Random Notes</Link><br />
    <Switch>
      <Route path={[`${match.path}/random`,`${match.path}/randomnotes`]} component={RandomNotes} />
      <Route path={[`${match.path}/neural`,`${match.path}/nn/intro`]} component={Introduction} />
      <Route path={[`${match.path}/textmining/intro`,`${match.path}/tm/intro`]} component={TextMiningIntroduction} />
      <Route path={[`${match.path}/textmining/nlg101`,`${match.path}/tm/nlg101`]} component={NLGIntro} />
     </Switch>
    <Route />
  </div>
) 

export default MachineLearning