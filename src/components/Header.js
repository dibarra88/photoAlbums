import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

const headerStyle = {
  cursor: 'pointer',
  backgroundColor: '#F5F5F5',
  boxShadow: 'none',
  textAlign: 'center',

}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  render() {
    return (
      <div>
        <AppBar
          title='My Albums'
          titleStyle={{ color: '#9E9E9E' }}
          iconStyleLeft={{ fill: 'red !important' }}
          style={headerStyle}
          onTitleTouchTap={(e) => { this.props.history.push('/') }}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem onClick={this.handleToggle}>{<CloseIcon />}</MenuItem>
          {this.props.albumList.map(albumName => (
            <Link key={albumName.id} to={`/album/${albumName.id}`} style={{textDecoration:"none"}}>
              <MenuItem onClick={this.handleToggle}>{albumName.name}</MenuItem>
            </Link>
          ))}
        </Drawer>
      </div>

    )
  }
}
function mapStateToProps(appState) {
  let list = appState.albums.map(function (album) {
    return {id:album.id, name:album.name};
  })
  return {
    albumList: list
  }
}
export default withRouter(connect(mapStateToProps)(Header))
