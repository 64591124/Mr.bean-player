import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// 自定义hooks
export const useAPPSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAPPDispatch: () => DispatchType = useDispatch
export const ShallowEqualAPP = shallowEqual
export default store
