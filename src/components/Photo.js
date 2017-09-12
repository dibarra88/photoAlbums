import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slide from './carousel/Slide';
import RightArrow from './carousel/RightArrow';
import LeftArrow from './carousel/LeftArrow';
import { withRouter } from 'react-router-dom'
import {getPhoto} from '../actions/albumActions';
class Photo extends Component {
  static defaultProps = {
    photo: {
      id: '',
      albumId:'',
      url:''
    }
  }

  componentWillMount() {
    let albumId = this.props.match.params.albumId
    let photoId = this.props.match.params.photoId
    getPhoto(albumId,photoId)
  }

  componentWillReceiveProps(props){
    let albumId = Number(props.match.params.albumId)
    let photoId = Number(props.match.params.photoId)
    if((albumId !== props.photo.albumId) || (photoId !== props.photo.id)){
      getPhoto(albumId,photoId)
    }
  }
  /* Previous & Next Slide Functionality */
  previousSlide = () => {
    this.props.history.push(`/album/${this.props.photo.albumId}/photo/${this.props.prevPhotoId}`)
  }

  nextSlide = () => {
    this.props.history.push(`/album/${this.props.photo.albumId}/photo/${this.props.nextPhotoId}`)
    }
  render() {
    return (
      <div id="grid">
        <div className="slider">
          {
            <Slide key={this.props.photo.id}
              background={this.props.photo.url}
            />
          }
          <LeftArrow previousSlide={this.previousSlide} />
          <RightArrow nextSlide={this.nextSlide} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(appState, ownProps) {
  return{
    photo:appState.currentPhoto,
    prevPhotoId: appState.prevPhotoId,
    nextPhotoId:appState.nextPhotoId
  }
}

export default withRouter(connect(mapStateToProps)(Photo))