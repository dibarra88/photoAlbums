import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAlbumPhotos} from '../actions/albumActions'
import { withRouter } from 'react-router-dom'
class PhotoAlbum extends Component {
    static defaultProps = {
        id: '',
        album: {
            photos: []
        }
    }
    componentWillMount(){
        let albumId = this.props.match.params.albumId
        getAlbumPhotos(albumId)
    }
   componentWillReceiveProps(props){
        let albumId = Number(props.match.params.albumId)
        if(albumId !== props.albumPhotos[0].albumId){
            getAlbumPhotos(albumId)
        }
    }
    render() {
        return (
            <div id="grid">
                <div id='photos'>
                        {this.props.albumPhotos.map((photo) => (
                        <div id='cardWrapper' key={photo.id}>
                            <Link to={`/album/${photo.albumId}/photo/${photo.id}`}>
                                <img src={photo.url} alt=" " />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
function mapStateToProps(appState,ownProps) {
    return {
        albumPhotos: appState.currentAlbumPhotos
    }
}
export default withRouter(connect(mapStateToProps)(PhotoAlbum))