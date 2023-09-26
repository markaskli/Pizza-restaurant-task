import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Pizza, Topping } from "../../app/models/Pizza";
import requests from "../../app/api/requests";
import { Order } from "../../app/models/Order";


export interface ReportSlice {
    order: Order[] | null
    status: string
}

const reportsAdapter = createEntityAdapter<Order[]>

const initialState : ReportSlice = {
    order: null,
    status: 'idle'
}


export const fetchOrdersAsync = createAsyncThunk<Order[]>(
    'report/fetchOrderAsync',
    async (_, thunkAPI) => {
        try {
            return requests.Report.fetchOrder()
        }
        catch (error:any) {
            thunkAPI.rejectWithValue({error: error.data})
        }
    }
)


export const reportSlice = createSlice({
    name: "report",
    initialState,
    reducers: {
       setReport: (state, action) => {
        state.order = action.payload
       }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrdersAsync.pending, (state) => {
            state.status = 'pendingFetchOrdersAsync'
        });
        builder.addCase(fetchOrdersAsync.rejected, (state) => {
            state.status = 'idle'
        });
        builder.addCase(fetchOrdersAsync.fulfilled, (state, action) => {
            state.status = 'idle'
            state.order = action.payload
        });
    },
    
    
})



export default reportSlice.reducer