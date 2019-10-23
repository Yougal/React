export default (user={}, action)=>{
    if(action.type==='USER_DETAIL'){
        return action.payload.data;
    }else{
        return user;
    }
 }