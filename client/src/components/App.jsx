import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import List from './pages/List'
import StreetArtDetail from './pages/StreetArtDetail'
import { Container } from 'reactstrap'

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/list" component={List} />
          <Route path="/street-art-detail/:id" component={StreetArtDetail} />
          {/* <Route path="/new-street-art" component={StreetArtDetail} /> */}
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </Container>
    </div>
  )
}
