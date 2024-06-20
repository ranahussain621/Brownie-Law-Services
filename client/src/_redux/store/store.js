import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import firmReducer from '../features/firm/firmSlice'
import messageReducer from '../features/messageSlice'
import PaymentReducer from '../features/PaymentSlice'

export const store=configureStore({

    reducer:{
    auth:authReducer,
    firm:firmReducer,
    message:messageReducer,
    payment:PaymentReducer
    }
})

export default store