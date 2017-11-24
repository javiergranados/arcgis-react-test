import React, { Component } from 'react'
import L from 'leaflet'
import esri from 'esri-leaflet'
import axios from 'axios'
import geojson from 'geojson'
import styled from 'styled-components'

class Map extends Component {
  componentDidMount () {
    const id = this.props.id
    const lat = this.props.lat
    const long = this.props.long
    const zoom = this.props.zoom
    const basemapLayer = this.props.basemapLayer

    this.map = L.map(id).setView([lat, long], zoom)
    esri.basemapLayer(basemapLayer).addTo(this.map)

    this.getData()
  }

  getData () {
    axios.get('http://localhost:3000/api/data')
    .then(response => this.getLayers(response.data))
    .catch(error => console.log(error))
  }

  getLayers (response) {
    let data = response.males
    let poblation = geojson.parse(data, {Point: ['lat', 'lng']})
    let males = L.geoJSON(poblation, {onEachFeature: this.onEachFeature}).addTo(this.map)

    data = response.females
    poblation = geojson.parse(data, {Point: ['lat', 'lng']})
    let females = L.geoJSON(poblation, {onEachFeature: this.onEachFeature}).addTo(this.map)

    this.addControlLayers(males, females)
  }

  onEachFeature (feature, layer) {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
    }
  }

  addControlLayers (males, females) {
    let controlLayers = L.control.layers().addTo(this.map)

    controlLayers.addOverlay(males, 'Males')
    controlLayers.addOverlay(females, 'Females')

    this.forceUpdate()
  }

  render () {
    return (
      <div id={this.props.id} className={this.props.className} />
    )
  }
}

const MapStyled = styled(Map)`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`

export default MapStyled
