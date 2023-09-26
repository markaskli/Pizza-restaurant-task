import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pizza, Topping } from "../../app/models/Pizza";
import requests from "../../app/api/requests";

export interface OrderSlice {
    pizza: Pizza | null
    status: string
}

const initialState : OrderSlice = {
    pizza: null,
    status: "idle"
}


export const submitOrderAsnyc = createAsyncThunk(
    'order/submitOrderAsync',
    async (pizza: Pizza, thunkAPI) => {
        try {
            return requests.Order.postOrder(pizza)
            
        }
        catch (error: any) {
            thunkAPI.rejectWithValue({error: error.data})
        }
    }
) 


export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        initializePizza: (state, action) => {
            state.pizza = action.payload
            state.pizza!.size = "medium"
            state.pizza!.toppings = []
        },
        addTopping: (state, action) => {
            if (state.pizza) {
                state.pizza.toppings.push(action.payload)
            }
        },
        removeTopping: (state, action) => {
            if (state.pizza) {
                var index = state.pizza.toppings.findIndex(topping => topping.title === action.payload.title)
                if (index >= 0) {
                    state.pizza.toppings.splice(index, 1)
                }
                
            }
        },
        addSize: (state, action) => {
            if (state.pizza) {
                state.pizza.size = action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(submitOrderAsnyc.pending, (state) => {
            state.status = 'pending'
        });
        builder.addCase(submitOrderAsnyc.fulfilled, (state) => {
            state.status = "fulfilled"
        });
        builder.addCase(submitOrderAsnyc.rejected, (state) => {
            state.status = 'idle'
        });
    },
    
})

export const {initializePizza, addTopping, addSize, removeTopping} = orderSlice.actions

export default orderSlice.reducer