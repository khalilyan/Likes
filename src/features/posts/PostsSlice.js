import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    allPosts: [],
    liked: [],
    status: "idle",
    userName: {}
}


export const loadPosts = createAsyncThunk(
    "posts/load",
    async (_,{rejectWithValue})=>{
       try {
         const response = await fetch('https://picsum.photos/v2/list')
         if(!response.ok){
            throw new Error("Server is not defined")
         }
         const data = await response.json()
         return data
       } catch (error) {
         return rejectWithValue(error.message)
       }
    }
)
export const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        onLiked: (state,action) => {
            const findPic = state.allPosts.findIndex((pic)=>pic.id===action.payload.id);
            state.allPosts[findPic] = action.payload;
            if(action.payload.liked === true){
                state.liked.push(action.payload)
            } else{
                state.liked.splice(findPic, findPic+1)
            }
        },
        addCom: (state,action) => {
            const findPic = state.allPosts.findIndex((pic)=>pic.id===action.payload.id);
            state.allPosts[findPic].comment.push({text:action.payload.comment,id:Math.random()})
        },
        editUser: (state,action) => {
            state.userName = {name: action.payload,id: Math.random()}
        },
        delCom: (state,action) => {
            const findPic = state.allPosts.findIndex((pic)=>pic.id===action.payload.id);
            const findcoment =  state.allPosts[findPic].comment.findIndex((com)=>com.id ===action.payload.commentID)
            state.allPosts[findPic].comment.splice(findcoment, findcoment+1)
        },
        addPhoto: (state,action) => {
            state.allPosts = [action.payload,...state.allPosts]
        }
    },
    extraReducers: {
        [loadPosts.fulfilled]: (state, action) => {
            action.payload.forEach(element => {
                element.liked=false;
                element.comment=[];
            });
            state.allPosts = action.payload
        },
        [loadPosts.pending]: (state, action) => {
            state.status = "loading..."
        },
        [loadPosts.rejected]: (state, action) => {
            state.status = action.payload
        }
    }
})

export const {onLiked,addCom,editUser,delCom,addPhoto} = PostsSlice.actions
export const selectPosts = (state) => state.allPosts
export const selectLikes = (state) => state.allPosts.filter((el)=>el.liked===true);
export const selectUser = (state) => state.userName.name
export default PostsSlice.reducer