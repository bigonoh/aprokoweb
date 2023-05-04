/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'
import { toast } from 'raven-bank-ui'

export const getLocations = createAsyncThunk(
  'public/get_location',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get('/locations', payload)

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
        await thunkAPI.dispatch(setLocation(data))
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

export const home = createSlice({
  name: 'home',
  initialState: {
    location: [],
    isAuth: false,
    loading: false,
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setLocation: (state, action) => {
      state.isAuth = true
      state.location = action.payload
    },
  },
  extraReducers: {
    [getLocations.pending]: (state) => {
      state.loading = true
    },
    [getLocations.fulfilled]: (state) => {
      state.loading = false
    },
    [getLocations.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLocation, setUser } = home.actions

export default home.reducer
