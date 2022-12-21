import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello world'
  },
  reducers: {
    // 定义对应的函数
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export default counterSlice.reducer
export const { changeMessageAction } = counterSlice.actions
