import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import config from './components/config'
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/Error'
import Home from './components/Home'
import local from './components/location'


export default props => {

  const [page, setPage] = React.useState(local.name())

  React.useEffect(() => {
    setPage('Page changed! ', local.name())
  }, [local.name()])

  const BG = {
    Login: 'bg_react',
    Register: 'bg_react', 
    Account: 'bg_home',
    Home: 'bg_home',
    Main: 'bg_home'
  }

  return (
    <div className="App">
      <div className={'Background ' + BG[local.name()]}></div>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={450} 
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route path="/account" render={props => <Home {...props} />} />
              <Route path="/main" render={props => <Home {...props} />} />
              <Route path="/login" render={props => <Login {...props} />} />
              <Route path="/register" render={props => <Register {...props} />} />
              <Route path="*" render={props => <Home {...props} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  )

}