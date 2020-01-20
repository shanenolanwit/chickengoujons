import React from 'react'

class Paper extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>This paper : {this.props.match.params.id}</h1>
        
      </div>
    )
  }
}
export default Paper