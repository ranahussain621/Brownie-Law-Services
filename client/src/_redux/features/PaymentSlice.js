
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {   instance } from "../axios/axios";

const state = {
  SubscribeList:{},
  plans:[],
  SubscribedUserList:[],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};




  export const CreateUserForSubscription = createAsyncThunk("CreateUserForSubscription",
    async (userData, thunkAPI) => {
      
      
      try {
        const response = await instance.post("/api/stripe/create-user/",userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



//check the status of user subscription status
  export const CheckUserSubStatus = createAsyncThunk("CheckUserSubStatus",
    async (userData, thunkAPI) => {
      
      
      try {
        const response = await instance.get(`/api/stripe/customer-subscription-status/${userData}`,);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const CreateSessionForSubscription = createAsyncThunk("CreateSessionForSubscription",
  async (userData, thunkAPI) => {
   
    
    try {
      const response = await instance.post("/api/stripe/create-session/",userData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const CancelSubscriptionApi = createAsyncThunk("/CancelSubscriptionApi", async (userData, thunkAPI) => {
  try {
    const response = await instance.get(`/api/stripe/cancel-subscription/${userData}`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);

export const SubscriberDetailApi = createAsyncThunk("/SubscriberDetail", async (data, thunkAPI) => {
  try {
    const response = await instance.get(`/api/stripe/customer-subscription/${data}`);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);


export const SubscribedList = createAsyncThunk("/api/stripe/fetch-customer-list", async (_, thunkAPI) => {
  try {
    const response = await instance.get(`/api/stripe/fetch-customer-list`);  
    return response.data;
  
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);


export const getAllPlans = createAsyncThunk(
  "getAllPlans",
  async (_, thunkAPI) => {
    
    try {
      const response = await instance.get("/api/stripe/get-all-plans");
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const SubscribeUser = createAsyncThunk("SubscribeUser",
async (userData, thunkAPI) => {
  
  try {
    const response = await instance.post("/api/stripe/subscribe-customer-and-buy-plan",userData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);


export const UnSubscribeUser = createAsyncThunk("UnSubscribeUser",
async (userData, thunkAPI) => {
 
  try {
     const response = await instance.post("/api/stripe/unsubscribe-customer",userData);
     return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);


  export const paymentSlice = createSlice({
    name: "PaymentManagment",
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


    
      .addCase(CreateUserForSubscription.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateUserForSubscription.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
     
      })
      .addCase(CreateUserForSubscription.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
     


      .addCase(CreateSessionForSubscription.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateSessionForSubscription.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
       
      })
      .addCase(CreateSessionForSubscription.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
 
  

      .addCase(SubscribedList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SubscribedList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.SubscribeList = action.payload;
     
      })
      .addCase(SubscribedList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.SubscribeList = null;
      })



      .addCase(getAllPlans.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.plans = action.payload
      })
      .addCase(getAllPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
     
      })



      .addCase(SubscribeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SubscribeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.SubscribedUserList = action.payload
      })
      .addCase(SubscribeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
     
      })
  

    },
  });
  
  export default paymentSlice.reducer;
  export const { reset } = paymentSlice.actions;
  