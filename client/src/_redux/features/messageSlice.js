
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { baseURL } from "../axios/axios";

const state = {
chatList:[],
MessagesList:[],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};





  export const chatListApi = createAsyncThunk("chatListApi", async (data,thunkAPI) => {
    try {
      
  
         const res = await axios.post(`${baseURL}chat/chatlist`,data
         )
         
      return res.data
       
    
    } 
    catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
      
        return thunkAPI.rejectWithValue(message);
    }
      
    })
    

    export const AddInChatListApi = createAsyncThunk("AddInChatListApi", async (data,thunkAPI) => {
      try {
        
    
           const res = await axios.post(`${baseURL}chat/addInChatList`,data
          )
           
        return res.data
         
      
      } 
      catch (error) {
          const message =
            error.response?.data?.error || error.message || error.toString();
        
          return thunkAPI.rejectWithValue(message);
      }
        
      })





      export const sendMessageApi = createAsyncThunk("sendMessageApi", async (data,thunkAPI) => {
        try {
          
      
             const res = await axios.post(`${baseURL}message`,data,
            )
             
          return res.data
           
        
        } 
        catch (error) {
            const message =
              error.response?.data?.error || error.message || error.toString();
          
            return thunkAPI.rejectWithValue(message);
        }
          
        })






        export const GetMessageApi = createAsyncThunk("GetMessageApi", async (data,thunkAPI) => {
          
          try {
            
        
               const res = await axios.get(`${baseURL}message/${data}`,
               )
              
            return res.data
             
             
          
          } 
          catch (error) {
              const message =
                error.response?.data?.error || error.message || error.toString();
            
              return thunkAPI.rejectWithValue(message);
          }
            
          })
  













  export const messageSlice = createSlice({
    name: "Messages",
    initialState: state,
    reducers: {
      reset: (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = false;
      },
    },
    extraReducers: (builder) => {
      builder



//get all chat list
.addCase(chatListApi.pending, (state) => {
  state.isLoading = true;
})
.addCase(chatListApi.fulfilled, (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.chatList = action.payload;
  state.message = action.payload.message;
})
.addCase(chatListApi.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.chatList = null;
})



//get all chat list
.addCase(GetMessageApi.pending, (state) => {
  state.isLoading = true;
})
.addCase(GetMessageApi.fulfilled, (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.MessagesList = action.payload;
  state.message = action.payload.message;
})
.addCase(GetMessageApi.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.MessagesList = null;
})



    },
  });
  
  export default messageSlice.reducer;
  export const { reset } = messageSlice.actions;
  