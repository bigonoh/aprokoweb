/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { toast } from "raven-bank-ui";
import setAuthToken from "../utils/auth";


export const getAllUsers = createAsyncThunk(
  "/admin/users",
  async (payload, thunkAPI) => {

    try {

      const { data } = await axios.get(`/admin/users?limit=${payload.limit || 10 }&page=${payload.page || 1}`, payload);
      // console.log("admin", data);
      if (data.status !== "success") {
        toast.error(data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data.status === "success") {
        // toast.success(data.message, {
        //   theme: "colored",
        //   position: "top-center",
        // });
        // console.log(data, 'from this point');
        await thunkAPI.dispatch(setUsers(data?.data));
        return data;

        
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "/admin/users",
  async (payload, thunkAPI) => {

    try {

      const { data } = await axios.patch(`/admin/users/${payload.userId}`, payload);
      // console.log("admin", data);
      if (data.status !== "success") {
        toast.error(data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data.status === "success") {
        toast.success(data.message, {
          theme: "colored",
          position: "top-center",
        });
        console.log(data, 'from this point');
        // await thunkAPI.dispatch(setUsers(data?.data));
        return data;

        
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

export const getAllInformations = createAsyncThunk(
  "/admin/users",
  async (payload, thunkAPI) => {

    try {

      const { data } = await axios.get(`/admin/info?limit=${payload.limit || 10 }&page=${payload.page || 1}&populate=user`, payload);
      console.log("admin", data);
      if (data.status !== "success") {
        toast.error(data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data.status === "success") {
        // toast.success(data.message, {
        //   theme: "colored",
        //   position: "top-center",
        // });
        // console.log(data, 'from this point');
        await thunkAPI.dispatch(setInformations(data?.data));
        return data;

        
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

export const deleteInformation = createAsyncThunk(
  "/admin/info",
  async (payload, thunkAPI) => {

    try {

      const data  = await axios.delete(`/admin/info/${payload.id}`, payload);
      console.log("admin", data);
      if (data?.data?.status !== "success") {
        toast.error(data.response.data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data?.data?.status === "success") {
        toast.success(data.data.message, {
          theme: "colored",
          position: "top-center",
        });
        // console.log(data, 'from this point');
        // await thunkAPI.dispatch(setUsers(data?.data));
        return data.data;

      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

export const updateInformation = createAsyncThunk(
  "/admin/info",
  async (payload, thunkAPI) => {

    try {

      const  data  = await axios.patch(`/admin/info/${payload.id}`, payload);
      console.log("admin-info", data);
      if (data?.data?.status !== "success") {
        toast.error(data.response.data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data?.data?.status === "success") {
        toast.success(data.data.message, {
          theme: "colored",
          position: "top-center",
        });
        // console.log(data, 'from this point');
        // await thunkAPI.dispatch(setUsers(data?.data));
        return data.data;

      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

export const getAllWithdrawals = createAsyncThunk(
  "/admin/users",
  async (payload, thunkAPI) => {

    try {

      const { data } = await axios.get(`/admin/withdrawals?limit=${payload.limit || 10 }&page=${payload.page || 1}&populate=user`, payload);
      console.log("admin", data);
      if (data.status !== "success") {
        toast.error(data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data.status === "success") {
        // toast.success(data.message, {
        //   theme: "colored",
        //   position: "top-center",
        // });
        // console.log(data, 'from this point');
        await thunkAPI.dispatch(setWithdrawals(data?.data));
        return data;

        
      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);

export const approveWithdrawal = createAsyncThunk(
  "/admin/info",
  async (payload, thunkAPI) => {

    try {

      const  data  = await axios.patch(`/admin/withdrawal/${payload.id}`, payload);
      console.log("admin-info", data);
      if (data?.data?.status !== "success") {
        toast.error(data.response.data.message, {
          theme: "colored",
          position: "center-top",
      
        });
        return data;
      }
      
      if (data?.data?.status === "success") {
        toast.success(data.data.message, {
          theme: "colored",
          position: "top-center",
        });
        // console.log(data, 'from this point');
        // await thunkAPI.dispatch(setUsers(data?.data));
        return data.data;

      }
      // return thunkAPI.rejectWithValue(data);
    } catch (err) {
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right",
      
        });
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);
export const admin = createSlice({
  name: "admin",
  initialState: {
    users: {},
    informations: {},
    withdrawals: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.isAuth = true;
    },

    setInformations: (state, action) => {
      state.informations = action.payload;
      state.isAuth = true;
    },

    setWithdrawals: (state, action) => {
      state.withdrawals = action.payload;
      state.isAuth = true;
    },
   
  },

  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state) => {
      state.loading = false;
    },
    [getAllUsers.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false;
      state.isAuth = false;
      state = null;
    }, 
    
    [deleteInformation.pending]: (state) => {
      state.loading = true;
    },
    [deleteInformation.fulfilled]: (state) => {
      state.loading = false;
    },
    [deleteInformation.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false;
      state.isAuth = false;
      state = null;
    },

    [approveWithdrawal.pending]: (state) => {
      state.loading = true;
    },
    [approveWithdrawal.fulfilled]: (state) => {
      state.loading = false;
    },
    [approveWithdrawal.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false;
      state.isAuth = false;
      state = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers, setInformations, setWithdrawals} = admin.actions;

export default admin.reducer;
