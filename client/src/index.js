import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
// import registerServiceWorker from './registerServiceWorker';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl' // NEW
// Inform your Mapbox token (https://www.mapbox.com/account/)
mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2l1bGlhZ2FsbCIsImEiOiJjanhuZDh1eWkwMWN6M2NwZWNrcXJmdWM1In0._VQFWTfKSKwQAOOwLpt_ng' // NEW

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();
