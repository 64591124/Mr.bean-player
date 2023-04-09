import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  // 不用传参数
  (_, { dispatch }) => {
    // 获取轮播图数据
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
)
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 获取榜单数据
    // 1.每一个请求数据单独处理
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升')
    //         break
    //       case 3779629:
    //         console.log('飙升')
    //         break
    //       case 2884035:
    //         console.log('飙升')
    //         break
    //     }
    //   })
    // }
    // 2.将三个结果拿到 统一放到一个数组中管理
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     const res = await getBanners()
//     dispatch(changeBannersAction(res.banners))
//   }
// )

// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8)
//     dispatch(changeHotRecommendAction(res.result))
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (arg, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changeNewAlbumAction(res.albums))
//   }
// )

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbum: any[]
  rankings: any[]
  // upRanking: any
  // newRanking: any
  // originRanking: any
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: [],
  rankings: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
