import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../config/axiosInstance";

let loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {

    try{

        let res = await api.post("auth/login", credentials)
        console.log(res)

        return res.data

    } catch (e) {
        return thunkApi.rejectWithValue(e)
    }


  },
);
