import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleBook from './pages/SingleBook'
import Error from './pages/Error'

import NavigationBar from './components/Navbar'

function App() {
  return (
    <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/book/:id">
            <SingleBook />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
