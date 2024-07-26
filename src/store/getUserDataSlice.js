import {createSlice} from '@reduxjs/toolkit';
const state = {
    isLoggedIn: false,
}
const getUserData = createSlice({
  name: 'User Data',
  initialState: state,
  //   reducers: {
  //     increment: (state) => {
  //       state.value += 1;
  //     },
  //     decrement: (state) => {
  //       state.value -= 1;
  //     },
  //     incrementByAmount: (state, action) => {
  //       state.value += action.payload;
  //     },
  //   },
});

// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default getUserData.reducer;
