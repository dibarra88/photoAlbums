import store from '../store';
import axios from 'axios';

export function fetchAlbums() {
    return axios.get('/albums').then(function (response) {
        store.dispatch({
            type: 'FETCH_ALBUMS',
            albums: response.data
        })
    })
}
export function fetchPhotos() {
    return axios.get('/photos').then(function (response) {
        store.dispatch({
            type: 'FETCH_PHOTOS',
            photos: response.data
        })
    })
}
export function getAlbumPhotos(albumId) {
    return axios.get(`/photos/?albumId=${albumId}`).then(function (response) {
        const albumPhotos = response.data
        store.dispatch({
            type: 'GET_ALBUM_PHOTOS',
            currentAlbumPhotos: albumPhotos
        })
    })
}
export function getPhoto(albumId, photoId) {
    return axios.get(`/photos/?albumId=${albumId}`).then(function (response) {
        const albumPhotos = response.data            //Find photo index
        let photoIndex = albumPhotos.map(function (x) { return x.id }).indexOf(Number(photoId));

        //get prev photo id
        let prev = getPreviousPhotoId(albumPhotos, photoIndex)
        let next = getNextPhotoId(albumPhotos, photoIndex)

        store.dispatch({
            type: 'GET_PHOTO',
            currentPhoto: albumPhotos[photoIndex],
            currentPhotoIndex: photoIndex,
            prevPhotoId: prev,
            nextPhotoId: next
        })
    })
}
export function getPreviousPhotoId(albumPhotos, currentPhotoIndex) {
    if (currentPhotoIndex >= 1) {
        return albumPhotos[currentPhotoIndex - 1].id;
    }
    if (currentPhotoIndex === 0) {
        return albumPhotos[albumPhotos.length - 1].id
    }
}
export function getNextPhotoId(albumPhotos, currentPhotoIndex) {
    if ((currentPhotoIndex >= 0) && (currentPhotoIndex !== albumPhotos.length - 1)) {
        return albumPhotos[currentPhotoIndex + 1].id;
    }
    if (currentPhotoIndex === albumPhotos.length - 1) {
        return albumPhotos[0].id
    }
}