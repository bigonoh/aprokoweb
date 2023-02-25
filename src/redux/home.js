/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import setAuthToken from "../utils/auth";
import { toast } from "react-hot-toast";
import { customErrorId, customSuccessId } from "../utils/Helpers";

export const createTransactionPin = createAsyncThunk(
  "admin/create-transaction-pin",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("", payload);
      //       // console.log("register", data);

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored'
        // });
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        // await thunkAPI.dispatch(login(data));
        //   return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      // ;
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right"
        });
      }
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const bvnAndNinVerification = createAsyncThunk(
  "admin/bvn-nin-verification",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("", payload);
      // console.log("register", data);

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored'
        // });
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        // await thunkAPI.dispatch(login(data));
        //   return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      // ;
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right"
        });
      }
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const cacVerification = createAsyncThunk(
  "admin/cac-verification",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("", payload);
      // console.log("register", data);

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored'
        // });
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        // await thunkAPI.dispatch(login(data));
        //   return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      // ;
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right"
        });
      }
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const businessInfomationVerification = createAsyncThunk(
  "admin/business-info-verification",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("", payload);
      // console.log("register", data);

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored'
        // });
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        // await thunkAPI.dispatch(login(data));
        //   return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      // ;
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right"
        });
      }
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addressVerification = createAsyncThunk(
  "admin/address-verification",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("", payload);
      // console.log("register", data);

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored'
        // });
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        // await thunkAPI.dispatch(login(data));
        //   return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      // ;
      if (err.response.data.status === "fail" && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: "colored",
          position: "top-right"
        });
      }
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const home = createSlice({
  name: "home",
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true;
      state.user = action.payload;
    },
  },
  extraReducers: {
    [createTransactionPin.pending]: (state) => {
      state.loading = true;
    },
    [createTransactionPin.fulfilled]: (state) => {
      state.loading = false;
    },
    [createTransactionPin.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false;
      state.isAuth = false;
      state = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, setUser } = home.actions;

export default home.reducer;
