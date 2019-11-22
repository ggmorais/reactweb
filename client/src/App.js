import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import config from './components/config'
import Posts from './components/Posts'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Error from './components/Error'
import Home from './components/Home'


export default props => {

  const [api, setApi] = React.useState(config.api)
  const [page, setPage] = React.useState(document.location.pathname)
  const [bg, setBg] = React.useState('bg_react')

  React.useEffect(() => {
    setPage(document.location.pathname.substr(1).toUpperCase())
  }, [document.location.pathname])

  document.title = page
  
  return (
    <div className="App">
      <div className='Background bg_react'></div>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450} 
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route path="/login" render={props => <Login {...props} />} />
              <Route path="/register" render={props => <Register {...props} />} />
              <Route path="/error" component={Error} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  )

}