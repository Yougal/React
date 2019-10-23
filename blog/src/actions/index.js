import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostAction = ()=>{
    return async (dispatch)=>{
        const response= await jsonPlaceholder.get('/posts');
        dispatch( {
            type: 'POST_LIST',
            payload: response
        });
    }
}

export const fetchUserHeaderAction = (userId)=>{
    return async (dispatch)=>{
        const response= await jsonPlaceholder.get('/users/'+userId);
        dispatch( {
            type: 'USER_DETAIL',
            payload: response
        });
    }
}
