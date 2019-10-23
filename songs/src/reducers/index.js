import {combineReducers} from 'redux';

const songsReducer=()=>{
    return [
        {title:'Song1', duration:'4:05'},
        {title:'Song2', duration:'3:15'},
        {title:'Song3', duration:'2:55'},
        {title:'Song4', duration:'4:35'},
        {title:'Song5', duration:'4:52'},
        {title:'Song6', duration:'3:33'},
        {title:'Song7', duration:'2:15'},
    ];
}

const selectedSongReducer=(songSelected=null, action)=>{
   if(action.type==='SELECT_SONG'){
       return action.payload;
   }else{
       return songSelected;
   }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});