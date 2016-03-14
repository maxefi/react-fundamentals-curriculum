import React from 'react'
import ReactDOM from 'react-dom'

var HelloWeather = React.createClass({
  render() {
    return (
      <div>THE WEATHER IS BAD</div>
    )
  }
})

ReactDOM.render(<HelloWeather/>, document.getElementById('app'))
