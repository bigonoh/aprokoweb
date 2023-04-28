import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'
import { toast } from 'raven-bank-ui'

export const getInfos = createAsyncThunk(
  '/register',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/infos?limit=${payload.limit || 10}&page=${
          payload.page || 1
        }&populate=user`,
        payload
      )
      // console.log("login", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data.status === 'success') {
        // toast.success(data.message, {
        //   theme: "colored",
        //   position: "top-center",
        // });
        // console.log(data?.data, 'from this point');
        await thunkAPI.dispatch(setInfos(data?.data))
        return data
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
        return thunkAPI.rejectWithValue(err)
      }
    }
  }
)

export const getBoughtInfo = createAsyncThunk(
  '/bought-info',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/purchase/user?limit=${payload.limit || 10}&page=${
          payload.page || 1
        }&populate=user,info_id`,
        payload
      )
      // console.log("login", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data.status === 'success') {
        // toast.success(data.message, {
        //   theme: "colored",
        //   position: "top-center",
        // });
        // console.log(data?.data, 'from this point');
        await thunkAPI.dispatch(setBoughtInfo(data?.data))
        return data
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
        return thunkAPI.rejectWithValue(err)
      }
    }
  }
)

export const getSales = createAsyncThunk(
  '/register',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/sale?limit=${payload.limit || 10}&page=${
          payload.page || 1
        }&populate=buyer`,
        payload
      )
      // console.log("login", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data.status === 'success') {
        // toast.success(data.message, {
        //   theme: "colored",
        //   position: "top-center",
        // });
        // console.log(data?.data, 'from this point');
        await thunkAPI.dispatch(setSales(data?.data))
        return data
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
        return thunkAPI.rejectWithValue(err)
      }
    }
  }
)

export const createInfo = createAsyncThunk(
  '/create-info',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`/infos`, payload)
      // console.log("login", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data?.status === 'success') {
        toast.success(data?.message, {
          theme: 'colored',
          position: 'top-center',
        })
        return data
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
        return thunkAPI.rejectWithValue(err)
      }
    }
  }
)

export const sendProposal = createAsyncThunk(
  '/create-proposal',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`/proposal`, payload)
      // console.log("login", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data?.status === 'success') {
        toast.success(data?.message, {
          theme: 'colored',
          position: 'top-center',
        })
        return data
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
        return thunkAPI.rejectWithValue(err)
      }
    }
  }
)

export const info = createSlice({
  name: 'user',
  initialState: {
    infos: [],
    isAuth: false,
    loading: false,
    boughtInfos: [],
    sales: [],
    token: localStorage?.getItem('token'),
  },
  reducers: {
    setInfos: (state, action) => {
      state.infos = action.payload
      state.isAuth = true
    },
    setSales: (state, action) => {
      state.sales = action.payload
      state.isAuth = true
    },

    setBoughtInfo: (state, action) => {
      state.boughtInfos = action.payload
      state.isAuth = true
    },
  },

  extraReducers: {
    [getInfos.pending]: (state) => {
      state.loading = true
    },
    [getInfos.fulfilled]: (state) => {
      state.loading = false
    },
    [getInfos.rejected]: (state) => {
      state.loading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setInfos, setSales, setBoughtInfo } = info.actions

export default info.reducer
