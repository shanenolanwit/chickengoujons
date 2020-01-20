
import React from 'react'
import { Link } from 'react-router-dom'

class Thesis extends React.Component {
  render() {
    return (
      <div>
        <h1>My Thesis</h1>
        <ul>
          <li>
            <Link to="/thesis/papers">Papers</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Thesis