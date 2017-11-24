import React, { Component } from 'react'
import Map from './Map.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 40.25,
      long: 3.41,
      zoom: 5
    }
  }

  render () {
    return (
      <div>
        <Map id='myMap' basemapLayer='DarkGray' lat={this.state.lat} long={this.state.long} zoom={this.state.zoom} />
      </div>
    )
  }
}

export default App
