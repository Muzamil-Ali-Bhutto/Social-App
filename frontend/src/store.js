import {configureStore} from "@reduxjs/toolkit"
import{ postOfFollowingReducer, userReducer, allUsersReducer } from "./Reducers/User";
import { likeReducer } from "./Reducers/Post";

const initialState = {}
const store = configureStore({
    reducer:{
        user: userReducer,
        postOfFollowing: postOfFollowingReducer,
        allUsers: allUsersReducer,
        like: likeReducer,
    },
});

export default store;





