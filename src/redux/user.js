/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../utils/axios'
import { toast } from 'raven-bank-ui'
import setAuthToken from '../utils/auth'

export const registerUser = createAsyncThunk(
  '/register',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('/auth/register', payload)
      console.log(data, 'thunk')
      if (data.data.status !== 'success') {
        toast.error(data.data.message, {
          theme: 'colored',
          position: 'center-top',
        })
        return data
      }

      if (data.data.status === 'success') {
        toast.success(data.data.message, {
          theme: 'colored',
          position: 'top-center',
        })

        await thunkAPI.dispatch(login(data?.data?.data?.tokens?.access?.token))
        await localStorage.setItem('user', JSON.stringify(data?.data.data.user))
        // return thunkAPI.rejectWithValue(data)
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

export const validateOtp = createAsyncThunk(
  'register/validate_registration_otp',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const { data } = await axios.post(
        'register/validate_registration_otp',
        payload
      )
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
        })
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        // toast.success(data.data.message, {
        //   theme: "colored",
        // });
        await thunkAPI.dispatch(login(data))
        return thunkAPI.rejectWithValue(data)
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

export const updateUserProfile = createAsyncThunk(
  'register/update-user-profile',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const { data } = await axios.post('/update_user', payload)

      if (data.status === 'fail') {
        toast.error(data.message, {
          theme: 'colored',
        })
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        toast.success(data.message, {
          theme: 'colored',
        })
        // await thunkAPI.dispatch(login(data));
        return thunkAPI.rejectWithValue(data)
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

export const resendEmail = createAsyncThunk(
  'register/resend_email_validation_otp',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'register/resend_email_validation_otp',
        payload
      )
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.status === 'success') {
        toast.success(data.message, {
          theme: 'colored',
        })
        // await thunkAPI.dispatch(login(data));
        return thunkAPI.rejectWithValue(data)
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 400) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const getUser = createAsyncThunk(
  'dashboard/get-user',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const token = localStorage.getItem('token')
      await setAuthToken(token)
      const { data } = await axios.get('/get_user')
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
        })

        // return thunkAPI.rejectWithValue(data);
      }
      if (data.status === 'success') {
        // console.log("resend otp", data);
        const user = data?.data?.user
        const wallet = data?.data?.wallet
        await thunkAPI.dispatch(setUser(user))
        await thunkAPI.dispatch(setWallet(wallet))
        return data
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 400) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const loginUser = createAsyncThunk(
  'login',
  async (formData, thunkAPI) => {
    const payload = {
      email: formData.email,
      password: formData.password,
    }
    try {
      const data = await axios.post('auth/login', payload)
      // console.log('we gere', data)
      if (data?.response?.data?.status === 'fail') {
        toast.error(data?.response?.data?.message, {
          theme: 'colored',
          position: 'top-center',
        })

        return
      }
      if (data?.data?.status !== 'success') {
        if (data?.payload?.data?.action === 'verify_email') {
          toast.info(data?.data?.message, {
            theme: 'colored',
            position: 'top-center',
          })
          return data?.data
        } else
          toast.error(data?.data?.message, {
            theme: 'colored',
            position: 'top-center',
          })
        return thunkAPI.rejectWithValue(data?.data)
      }
      if (data?.data?.status === 'success') {
        toast.success(data?.data?.message, {
          theme: 'colored',
          position: 'top-right',
        })

        await thunkAPI.dispatch(setUser(data?.data.data.user))
        await localStorage.setItem('user', JSON.stringify(data?.data.data.user))
        await thunkAPI.dispatch(login(data?.data.data.tokens.access.token))
        return data?.data
      }
    } catch (err) {
      if (
        err.response.data.status === 'fail' &&
        err.response.data.message !==
          'Your email address is yet to be verified. A mail has been sent to your email address. Please check and follow the instruction in the mail to verify account.'
      ) {
        toast.error(err.response?.data?.message?.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'forgot-password',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('/forgot_password', email)
      // console.log("forgot", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
        })
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        // toast.success(data.message, {
        //   theme: "colored",
        // });
        await thunkAPI.dispatch(login(data))
        return thunkAPI.rejectWithValue(data)
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

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('/reset_password', payload)
      // console.log("register", data);

      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
        })
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        // await thunkAPI.dispatch(login(data));
        return thunkAPI.rejectWithValue(data)
      }
    } catch (err) {
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

export const validateResetPasswordOtp = createAsyncThunk(
  'verify_reset_passwordOTP',
  async (otp, thunkAPI) => {
    try {
      const { data } = await axios.post('verify_reset_passwordOTP', otp)
      // console.log("validateOtp", data);
      if (data.status !== 'success') {
        toast.error(data.message, {
          theme: 'colored',
        })
        return thunkAPI.rejectWithValue(data)
      }
      if (data.status === 'success') {
        toast.success(data.data.message, {
          theme: 'colored',
        })
        await thunkAPI.dispatch(login(data))
        return thunkAPI.rejectWithValue(data)
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

export const logoutUser = createAsyncThunk(
  'logout',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('/logout_user', payload)
      // console.log(data);
      if (data?.data?.status === 'fail') {
        toast.error(data?.data?.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data?.data?.status === 'success') {
        toast.success(data?.data?.message, {
          theme: 'colored',
        })
        return data
      }
    } catch (err) {
      //
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

export const user = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')),
    wallet: [],
    account_details: [],
    isAuth: false,
    loading: false,
    token: localStorage?.getItem('token'),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuth = true
    },
    setWallet: (state, action) => {
      state.wallet = action.payload
      state.isAuth = true
    },
    login: (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', state.token)
      state.isAuth = true
      state.loading = false
    },
  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false
    },
    [registerUser.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
    [getUser.pending]: (state) => {
      state.loadUser = true
    },
    [getUser.fulfilled]: (state) => {
      state.loadUser = false
    },
    [getUser.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loadUser = false
      state.isAuth = false
      state = null
    },
    [validateOtp.pending]: (state) => {
      state.loading = true
    },
    [validateOtp.fulfilled]: (state) => {
      state.loading = false
    },
    [validateOtp.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [resendEmail.pending]: (state) => {
      state.loading = true
    },
    [resendEmail.fulfilled]: (state) => {
      state.loading = false
    },
    [resendEmail.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
    [loginUser.pending]: (state) => {
      state.loading = true
    },
    [loginUser.fulfilled]: (state) => {
      state.loading = false
    },
    [loginUser.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
    [forgotPassword.pending]: (state) => {
      state.loading = true
    },
    [forgotPassword.fulfilled]: (state) => {
      state.loading = false
    },
    [forgotPassword.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
    [resetPassword.pending]: (state) => {
      state.loading = true
    },
    [resetPassword.fulfilled]: (state) => {
      state.loading = false
    },
    [resetPassword.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [validateResetPasswordOtp.pending]: (state) => {
      state.loading = true
    },
    [validateResetPasswordOtp.fulfilled]: (state) => {
      state.loading = false
    },
    [validateResetPasswordOtp.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [updateUserProfile.pending]: (state) => {
      state.loadUpdate = true
    },
    [updateUserProfile.fulfilled]: (state) => {
      state.loadUpdate = false
    },
    [updateUserProfile.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loadUpdate = false
      state.isAuth = false
      state = null
    },
    [logoutUser.pending]: (state) => {
      state.loadLogout = true
    },
    [logoutUser.fulfilled]: (state) => {
      state.loadLogout = false
    },
    [logoutUser.rejected]: (state) => {
      // localStorage.removeItem("toke`n");
      state.loadLogout = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, setUser, setWallet, setAccountDetails } = user.actions

export default user.reducer
