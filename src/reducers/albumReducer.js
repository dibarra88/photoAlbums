const albumInitialState = {
    albums: [],
    photos:[],
    currentAlbumPhotos:[],
    currentPhoto:{},
    currentPhotoIndex:0,
    prevPhotoId:0,
    nextPhotoId:0,

}

export default function (state = albumInitialState, action) {
    switch (action.type) {
        case 'FETCH_ALBUMS':
            return { ...state, albums: [...action.albums] }
        case 'FETCH_PHOTOS':
            return {...state, photos:[...action.photos]}
        case 'GET_ALBUM_PHOTOS':
            return{...state, currentAlbumPhotos:[...action.currentAlbumPhotos]}
        case 'GET_PHOTO':
            return{...state,
                 currentPhoto:{...action.currentPhoto},
                 currentPhotoIndex:action.currentPhotoIndex,
                prevPhotoId:action.prevPhotoId,
                nextPhotoId:action.nextPhotoId}
        default:
            return state;
    }
}