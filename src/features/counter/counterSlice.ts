import { createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState = [
  {
    id: 1,
    product_name:"This is default row please add from add button",
    brand:"default",
    price:30,
    quantity:6,
    status:"",
  }
]


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    setStatus: (state, action) => {
      console.log(state[0].id)
      state[action.payload.id].status = action.payload.status;
    },
    editProduct: (state, action) => {
      state[action.payload.id].price = action.payload.price;
      state[action.payload.id].quantity = action.payload.quantity;
    },
  },
});

export const { setStatus,editProduct } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
