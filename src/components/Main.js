import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Quiz from './Quiz'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
  <main>
    <Scroll>
      <Switch>
        <Route exact path='/' component={Quiz}/>
        <Route exact path='/Quiz' component={Quiz}/>
      </Switch>
    </Scroll>
  </main>
)

export default Main
