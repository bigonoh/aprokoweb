/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'
import { toast } from 'raven-bank-ui'

export const getTrx = createAsyncThunk(
  'public/get_location',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/transaction?limit=${payload.limit || 10}&page=${
          payload.page || 1
        } &sortBy=${payload.sort || 'asc'}`,
        payload
      )
      console.log(data)
      if (!data) {
        // toast.error(data.message, {
        //   theme: 'colored'
        // });
        // return thunkAPI.rejectWithValue(data);
      }
      if (data) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        await thunkAPI.dispatch(setTransactions(data?.data))
        //   return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const requestWithdrawal = createAsyncThunk(
  'public/get_location',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`/withdraw`, payload)
      if (data.status === 'fail') {
        toast.error(data.message)
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        toast.success(data.message, {
          theme: 'colored',
        })
        return data
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const makePurchase = createAsyncThunk(
  'public/purchase',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`/purchase`, payload)
      if (data.status === 'fail') {
        toast.error(data.message)
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        toast.success(data.message, {
          theme: 'colored',
        })
        return data
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const transaction = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    isAuth: false,
    loading: false,
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setTransactions: (state, action) => {
      state.isAuth = true
      state.transactions = action.payload
    },
  },
  extraReducers: {
    [getTrx.pending]: (state) => {
      state.loading = true
    },
    [getTrx.fulfilled]: (state) => {
      state.loading = false
    },
    [getTrx.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTransactions } = transaction.actions

export default transaction.reducer
