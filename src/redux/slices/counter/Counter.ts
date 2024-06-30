import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'



export const counterslice = createSlice({
    initialState: 0,
    name : "counter",
    reducers :{
        increment : (state) => state + 1,
        decrement : (state) => state -1,
            // state.value -= 1
        
    },
});

export const{increment , decrement} = counterslice.actions
export default counterslice.reducer