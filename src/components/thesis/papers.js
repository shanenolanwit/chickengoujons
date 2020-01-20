import React from 'react'
import { Route, Link } from 'react-router-dom'
import Paper from './paper'

class Papers extends React.Component {
  render() {
    return (
      <div>
        <h1>Papers</h1>
        <ul>
          <li>
            <Link to={ `${this.props.match.url}/1` }>Paper 1</Link>
          </li>
          <li>
            <Link to={ `${this.props.match.url}/2` }>Paper 2</Link>
          </li>
          <li>
            <Link to={ `${this.props.match.url}/3` }>Paper 3</Link>
          </li>
        </ul>
        <Route path={ `${this.props.match.path}/:id` } component={Paper} />
      </div>
     
    )
  }
}
export default Papers