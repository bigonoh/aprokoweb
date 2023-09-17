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
        }&populate=user&sortBy=${payload.sortBy || 'createdAt:desc'}`,
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
export const getProposal = createAsyncThunk(
  '/proposals',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/proposal?limit=${payload.limit || 10}&page=${
          payload.page || 1
        }&populate=asker,answerer,ask_info_id, answered_info_id&sortBy=${payload.sortBy || 'createdAt:desc'}${payload.answerer ? `&answerer=${payload.answerer}` : ''}${payload.asker ? `&asker=${payload.asker}` : ''}&status=pending&status=accepted`,
        payload
      )
      // console.log("response", data?.data?.results);
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
        await thunkAPI.dispatch(setProposals(data?.data))
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


export const getSentProposal = createAsyncThunk(
  '/proposals',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/proposal?limit=${payload.limit || 10}&page=${
          payload.page || 1
        }&populate=asker,answerer,ask_info_id, answered_info_id&sortBy=${payload.sortBy || 'createdAt:desc'}${payload.answerer ? `&answerer=${payload.answerer}` : ''}${payload.asker ? `&asker=${payload.asker}` : ''}`,
        payload
      )
      // console.log("response", data?.data?.results);
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
        await thunkAPI.dispatch(setProposals(data?.data))
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

export const acceptRejectProposal = createAsyncThunk(
  '/accept-proposals',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `proposal/accept`,
        payload
      )
      console.log("response", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data.status === 'success') {
        toast.success(data.message, {
          theme: "colored",
          position: "top-center",
        });
        // console.log(data?.data, 'from this point');

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

export const getUserInfos = createAsyncThunk(
  '/register',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/infos?limit=${payload.limit || 10}&page=${
          payload.page || 1
        }&populate=user&sortBy=${payload.sortBy || 'createdAt:desc'}&user=${
          payload.user || ''
        }`,
        payload
      )
      // console.log('login', data)
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
        await thunkAPI.dispatch(setUserInfos(data?.data))
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
        }&sortBy=${payload.sortBy || 'created_at:desc'}&populate=user,info_id`,
        payload
      )

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
        }&populate=buyer&sortBy=${payload.sortBy || 'created_at:desc'}`,
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

export const deleteProposal = createAsyncThunk(
  '/delete/proposal',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`proposal/${payload.id}`, payload)

      if (data?.data?.status !== 'success') {
        toast.error(data.response.data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data?.data?.status === 'success') {
        toast.success(data.data.message, {
          theme: 'colored',
          position: 'top-center',
        })
        // console.log(data, 'from this point');
        // await thunkAPI.dispatch(setUsers(data?.data));
        return data.data
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
    userInfos: [],
    isAuth: false,
    loading: false,
    boughtInfos: [],
    sales: [],
    proposals: [],
    token: localStorage?.getItem('token'),
  },
  reducers: {
    setInfos: (state, action) => {
      state.infos = action.payload
      state.isAuth = true
    },
    setUserInfos: (state, action) => {
      state.userInfos = action.payload
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

    setProposals: (state, action) => {
      state.proposals = action.payload
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
export const { setInfos, setSales, setBoughtInfo, setProposals, setUserInfos } = info.actions

export default info.reducer
