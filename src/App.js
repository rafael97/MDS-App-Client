import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Loadable from 'react-loadable';
import Loading from './components/Commons/Loading';
import Header from './components/Commons/Header';
import SearchBar from './components/Commons/SearchBar';

import './App.css'
import Dashboard from './components/Pages/Dashboard';

const LoadableDashboard = Loadable({
  loader: () => import('./components/Pages/Dashboard'),
  loading: Loading
});

const LoadableCategories = Loadable({
  loader: () => import('./components/Pages/Categories'),
  loading: Loading
});

const LoadableCourses = Loadable({
  loader: () => import('./components/Pages/Courses'),
  loading: Loading
});

const LoadableAbout = Loadable({
  loader: () => import('./components/Pages/About'),
  loading: Loading
});

const Loadable404 = Loadable({
  loader: () => import('./components/Pages/404'),
  loading: Loading
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />

        <Dashboard />
        {/* <Switch>
          <Route exact path="/" component={LoadableDashboard} />
          <Route exact path="/course" component={LoadableCourses} />
          <Route exact path="/about" component={LoadableAbout} />
          <Route exact path="/404" component={Loadable404} />
        </Switch> */}

      </div>
    );
  }
}

export default App;
