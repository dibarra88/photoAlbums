import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle} from 'material-ui/Card';
import { withRouter } from 'react-router-dom'
class Albums extends Component {
    render() {
        return (
            <div id="grid">
                <div id='photos'>
                    {this.props.albums.map((album) => (
                        <div id='cardWrapper' key={album.id}>
                            <Link to={`/album/${album.id}`} >
                                <Card>
                                    <CardMedia
                                        overlay={<CardTitle title={album.name} style={{background:'transparent'}}/>}
                                        overlayContainerStyle={{background:'transparent'}}
                                        overlayContentStyle={{background:'transparent'}}
                                    >
                                        <img src={album.cover} alt="" />
                                    </CardMedia>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        albums: appState.albums
    }
}
export default withRouter(connect(mapStateToProps)(Albums))