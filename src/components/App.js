import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store';
import BaseLayout from './BaseLayout';
import Albums from './Albums';
import PhotoAlbum from './PhotoAlbum';
import Photo from './Photo';
import { fetchAlbums, fetchPhotos } from '../actions/albumActions';

class App extends Component {
  componentDidMount() {
    fetchAlbums()
    fetchPhotos()
  }
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router>
            <BaseLayout>
              <Switch>
                <Route exact path='/' component={Albums} />
                <Route exact path='/album/:albumId' component={PhotoAlbum} />
                <Route exact path='/album/:albumId/photo/:photoId' component={Photo} />
              </Switch>
            </BaseLayout>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
