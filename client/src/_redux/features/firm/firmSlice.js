import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance,FormData } from "../../axios/axios";

const state = {
  firm: [],
  lawyerList:{
    AllLawyersList:{}
  },
  caseData:[],
  Service:[],
  newsList:[],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  lawyerFirm:[]
};



export const getTeamLaywer = createAsyncThunk(
    "/lawyer/team-lawyer",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get("/lawyer/team-lawyer/");
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  export const getAllLaywers = createAsyncThunk(
    "/lawyer/simple-lawyer",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get("/lawyer/simple-lawyer/");
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const getAllFirms = createAsyncThunk(
    "/firms/all-firms",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get("/api/firm");
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  export const getCaseType = createAsyncThunk(
    "/casetype/case-type-list",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get("/casetype/case-type-list/");
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const getLawyerType = createAsyncThunk(
    "/lawyertype/lawyer-type-list",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get("/lawyertype/lawyer-type-list/");
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const getServicesByID = createAsyncThunk(
    "/get-services/by-id",
    async (userData, thunkAPI) => {
      console.log("🚀 ~ userData:", userData)
      
      try {
        const response = await instance.post("/api/service/byuser", userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  
  export const getServices = createAsyncThunk(
    "/get-services",
    async (_, thunkAPI) => {
      
      try {
        const response = await instance.get("/api/service/list");
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const addNewService = createAsyncThunk(
    "/add-services",
    async (userData, thunkAPI) => {
      
      try {
        const response = await FormData.post("/api/service", userData);
      
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );





  export const getNews = createAsyncThunk("/get-news",
async (userData, thunkAPI) => {
      try {
        const response = await instance.post("/news/news-list",userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  
  export const getNewsDetails = createAsyncThunk(
    "/get-news-details",
    async (userData, thunkAPI) => {
  
      try {
        const response = await instance.get(`/news/news-detail/${userData}`);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const addNewNews = createAsyncThunk(
    "/add-news",
    async (userData, thunkAPI) => {
      
      try {
        const response = await FormData.post("/news/add-news", userData);
      
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  export const Updatenews = createAsyncThunk(
    "/news/update-news",
    async (userData, thunkAPI) => {
      
      try {
        const response = await FormData.put('/news/update-news', userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  export const Deletenews = createAsyncThunk(
    "/news/delete-news",
    async (userData, thunkAPI) => {
      
      try {
        const response = await instance.delete(`/news/delete-news/${userData}`);
       
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );





  export const getTeamMember = createAsyncThunk(
    "/get/team-member",
    async (_, thunkAPI) => {
      try {
        const response = await instance.get(`/lawyer/team-lawyer/`);
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const getFirmTeamMember = createAsyncThunk(
    "/lawyer/get-firm-team-members/",
    async (userData, thunkAPI) => {
      try {
        const response = await instance.post(`/lawyer/get-firm-team-Lawyer/`,userData);
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );





  
  export const DeleteTeamMember = createAsyncThunk(
    "/delete/team-member",
    async (userData, thunkAPI) => {
      try {
        const response = await instance.delete(`/lawyer/delete-team-member/${userData}`);
        // console.log(response);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const SendRequestToLawyer = createAsyncThunk(
    "/SendRequestToLawyer",
    async (userData, thunkAPI) => {
     
      try {
        const response = await instance.post(`/lawyer/send-addLawyer-mail/`,userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );





  export const AddCaseDetails = createAsyncThunk(
    "/AddCaseDetails",
    async (userData, thunkAPI) => {
    
      try {
        const response = await FormData.post(`/case/add-case/`,userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const UpdateCase = createAsyncThunk(
    "/case/update-case",
    async (userData, thunkAPI) => {
     
      try {
        const response = await instance.put(`/case/update-case/${userData?.id}`, {description:userData.description});
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




  export const DeleteCase = createAsyncThunk(
    "/case/delete-case",
    async (userData, thunkAPI) => {
     
      try {
        const response = await instance.delete(`/case/delete-case/${userData}`);
       
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



  export const ListofAllCases = createAsyncThunk(
    "/case/list-of-cases",
    async (_, thunkAPI) => {
      
      try {
        const response = await instance.get(`/case/list-of-cases`);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const allCasesbyUser = createAsyncThunk(
    "/case/list-of-all-cases",
    async (userData, thunkAPI) => {
      
      try {
        const response = await instance.post(`/case/byuser`,userData);
        return response.data;
      } catch (error) {
        const message =
          error.response?.data?.error || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  export const UpdateFirmProfile = createAsyncThunk(
    "/auth/user-update",
    async (userData, thunkAPI) => {
     console.log("🚀 ~ userData:", userData)
     
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

  export const UpdateFirmProfileDetails = createAsyncThunk(
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

  export const firmSlice = createSlice({
    name: "firm",
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

      .addCase(getTeamLaywer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeamLaywer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let TeamLawyer = action.payload;
        if(state.firm){
          state.firm = { ...state.firm , TeamLawyer : TeamLawyer}
        }
        
        state.firm = { ...state.firm , TeamLawyer : TeamLawyer}
       

        state.message = action.payload?.message;
      })
      .addCase(getTeamLaywer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.firm = null;
      })





      
      .addCase(getAllLaywers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLaywers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.lawyerList.AllLawyersList = action.payload;

      
     })
     .addCase(getAllFirms.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.message = action.payload;
       state.firm = null;
     })


     .addCase(getAllFirms.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllFirms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.firm = action.payload;

    
   })
   .addCase(getAllLaywers.rejected, (state, action) => {
     state.isLoading = false;
     state.isError = true;
     state.message = action.payload;
     state.firm = null;
   })


      .addCase(getCaseType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCaseType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let CaseType = action.payload;

       if(state.firm){
         state.firm = { ...state.firm , CaseType : CaseType}
       }
       
       state.firm = { ...state.firm , CaseType : CaseType}
      
     })
     .addCase(getCaseType.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.message = action.payload;
       state.firm = null;
     })



     .addCase(getLawyerType.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getLawyerType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      let LawyerType = action.payload;

     if(state.firm){
       state.firm = { ...state.firm , LawyerType : LawyerType}
     }
     
     state.firm = { ...state.firm , LawyerType : LawyerType}
    
   })
   .addCase(getLawyerType.rejected, (state, action) => {
     state.isLoading = false;
     state.isError = true;
     state.message = action.payload;
     state.firm = null;
   })






     
     .addCase(getNews.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
       state.newsList = action.payload;
    })
      
    
    .addCase(getNews.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.firm = null;
    })



        .addCase(addNewNews.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewNews.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.newsList = action.payload;
         
        })
        .addCase(addNewNews.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.newsList = null;
        })



        
        .addCase(Updatenews.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(Updatenews.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.newsList = action.payload
      
        })
        .addCase(Updatenews.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.newsList = null;
        })




        .addCase(Deletenews.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(Deletenews.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.newsList = action.payload
       
        })
        .addCase(Deletenews.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.firm = null;
        })


        
        .addCase(getServicesByID.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getServicesByID.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
           state.Service = action.payload;
        })
          
        
        .addCase(getServicesByID.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.Service = null;
        })

        .addCase(getServices.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getServices.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
           state.Service = action.payload;
        })
          
        
        .addCase(getServices.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.Service = null;
        })
    

        
        .addCase(addNewService.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewService.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.Service = action.payload;
         
        })
        .addCase(addNewService.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.Service = null;
        })


        
        .addCase(getTeamMember.pending, (state) => {
        state.isLoading = true;
        })
        .addCase(getTeamMember.fulfilled, (state, action) => {
        state.isLoading = false;
       state.isSuccess = true;
       let teamMember = action.payload;
       if(state.firm){
         state.firm = { ...state.firm , teamMember : teamMember}
       }
      
        state.firm = { ...state.firm , teamMember : teamMember}

     })
      .addCase(getTeamMember.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.message = action.payload;
       state.firm = null;
     })




     .addCase(getFirmTeamMember.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFirmTeamMember.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.lawyerFirm = action.payload
      state.message = action.payload.message;
    })
    .addCase(getFirmTeamMember.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.lawyerFirm = null;
    })

     



     .addCase(DeleteTeamMember.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(DeleteTeamMember.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.firm = action.payload
      state.message = action.payload.message;
    })
    .addCase(DeleteTeamMember.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.firm = null;
    })






     .addCase(SendRequestToLawyer.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(SendRequestToLawyer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      let newTeamMember = action.payload;
      if(state.firm){
        state.firm = { ...state.firm , newTeamMember : newTeamMember}
      }
     
       state.firm = { ...state.firm , newTeamMember : newTeamMember}

    })
   
    .addCase(SendRequestToLawyer.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.firm = null;
    })





    .addCase(AddCaseDetails.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AddCaseDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.caseData = action.payload;
      
    })
    .addCase(AddCaseDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.caseData = null;
    })





    .addCase(ListofAllCases.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(ListofAllCases.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.caseData = action.payload;
      
    })
   
    .addCase(ListofAllCases.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.caseData = null;
    })


    .addCase(allCasesbyUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(allCasesbyUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.caseData = action.payload;
      
    })
   
    .addCase(allCasesbyUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.caseData = null;
    })



    
    .addCase(UpdateCase.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(UpdateCase.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.firm = action.payload
      
    })
    .addCase(UpdateCase.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.firm = null;
    })



    .addCase(DeleteCase.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(DeleteCase.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.firm = action.payload
      state.message = action.payload.message;
    })
    .addCase(DeleteCase.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.firm = null;
    })



    },
});

export default firmSlice.reducer;
export const { reset } = firmSlice.actions;
