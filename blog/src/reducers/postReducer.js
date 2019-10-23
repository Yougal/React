export default (posts=[], action)=>{
    if(action.type==='POST_LIST'){
        return action.payload.data;
    }else{
        return posts;
    }
 }