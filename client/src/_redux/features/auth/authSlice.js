import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  instance,FormData } from "../../axios/axios";

const state = {
  user: null,
  userDetails:null,
  userList: null,
  contacts:{
    MessagesDetail:{},
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};



export const registerUser = createAsyncThunk(
    "/register-user",
    async (userData, thunkAPI) => {
  console.log(userData,'okkkkkkk')
      try {
        const response = await instance.post("/auth/signup/", {...userData});
        
         return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  
  export const loginUser = createAsyncThunk(
    "/login-user",
    async (userData, thunkAPI) => {
      try {
        const response = await instance.post("/auth/login/", userData);
        return response.data;
        
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



   
  export const contactUs = createAsyncThunk(
    "/contactUs-user",
    async (userData, thunkAPI) => {
   
      try {
        const response = await instance.post("/query/add-Query", userData);
        return response.data;   
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  
  export const ForgetPassword = createAsyncThunk(
    "/auth/user-forget-link",
    async (userData, thunkAPI) => {
   
      try {
        const response = await instance.post("/auth/user-forget-link/", userData);
       
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );





  export const ResetPasword = createAsyncThunk(
    "/auth/changePassword",
    async (userData, thunkAPI) => {

      try {
        const response = await instance.post("/auth/changePassword/",{...userData});
       
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const UpdateClientProfile = createAsyncThunk( "/auth/user-update", async (userData, thunkAPI) => {
      try {
        const response = await FormData.put("/auth/user-update/",userData);  
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const UpdateClientProfileDetails = createAsyncThunk(
    "/auth/user-details",
    async (userData, thunkAPI) => {

      try {
        const response = await instance.post("/auth/user-details/",userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  
  export const getUserRole = createAsyncThunk(
    "/access/get-user-role",
    async (userData, thunkAPI) => {
   
      try {
        const response = await instance.post("/access/get-user-role/",userData);
       
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  
  
  export const getAllRoles = createAsyncThunk(
    "/access/get-all-role",
    async (userData, thunkAPI) => {
    
      try {
        const response = await instance.get("/access/get-roles");
       
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  //Send message to a artist
export const SendMessage = createAsyncThunk(
  "SendMessage",
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post("chat/send-message", userData);
     
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);




//get chats list
export const ChatsList = createAsyncThunk(
  "ChatsList",
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post("chat/get-chats", userData);
     
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);



//get chat detail
export const ChatDetail = createAsyncThunk(
  "ChatDetail",
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post("chat/get-chat-details", userData);
     
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);






//get chat detail
export const InvitedLawyerInfoApi = createAsyncThunk(
  "ChatDetail",
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post("lawyer/firm-lawyer-detail", userData);
     
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const getAllUsers = createAsyncThunk("/all-user", async (_, thunkAPI) => {
  try {
    const response = await instance.get(`/auth/users/`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);




export const BlockUser = createAsyncThunk("BlockUser", async (userData, thunkAPI) => {
  try {
    const response = await instance.post("/access/bolck-user", userData);
   
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);


//api for block user for admin
export const UnBlockUser = createAsyncThunk("UnBlockUser", async (userData, thunkAPI) => {
  try {
    const response = await instance.post("/access/unbolck-user", userData);
   
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);


export const DeleteUser = createAsyncThunk("delete-User", async (userData, thunkAPI) => {
  try {
    const response = await instance.post("/auth/user-delete", userData);
   
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);



  export const authSlice = createSlice({
    name: "auth",
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
        .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
          
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        })



  
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload.message;
          state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        })




        .addCase(ForgetPassword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(ForgetPassword.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload.message;
          state.user = action.payload;
        })
        .addCase(ForgetPassword.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        })





        .addCase(ResetPasword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(ResetPasword.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload.message;
          state.user = action.payload;
        })
        .addCase(ResetPasword.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        })




        .addCase(UpdateClientProfile.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(UpdateClientProfile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload.message;
          state.user = action.payload;
        })
        .addCase(UpdateClientProfile.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        })





        .addCase(UpdateClientProfileDetails.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(UpdateClientProfileDetails.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload.message;
          state.userDetails = action.payload;
        })
        .addCase(UpdateClientProfileDetails.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.userDetails = null;
        })




        .addCase(getUserRole.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getUserRole.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.message = action.payload.message;
          let UserRole = action.payload;

          if(state.user){
            state.user = { ...state.user , UserRole : UserRole}
          }
          
          state.user = { ...state.user , UserRole : UserRole}
         
        })
      
        .addCase(getUserRole.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        })






            //get the contacts list of artists 
    .addCase(ChatDetail.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(ChatDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.contacts.MessagesDetail = action.payload;
      state.message = action.payload.message;
    })
    .addCase(ChatDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })


//get the contacts list of artists 
    .addCase(ChatsList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(ChatsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.contacts = action.payload;
      state.message = action.payload.message;
    })
    .addCase(ChatsList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })



    .addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userList = action.payload;
    
    })
    .addCase(getAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.userList = null;
    }) 


    
    .addCase(BlockUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(BlockUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    
    })
    .addCase(BlockUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    }) 



    
    .addCase(UnBlockUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(UnBlockUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    
    })
    .addCase(UnBlockUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    }) 



    
    .addCase(DeleteUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(DeleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    }) 


        
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;