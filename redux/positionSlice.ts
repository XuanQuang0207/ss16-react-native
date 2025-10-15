import axiosClient from "@/apis/axiosClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Position {
  id?: string;
  positionName: string;
  description: string;
  positionStatus: string;
}

interface PositionState {
  list: Position[];
  loading: boolean;
  error: string | null;
}

const initialState: PositionState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchPositions = createAsyncThunk(
  "positions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/positions");
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Lỗi tải dữ liệu");
    }
  }
);

export const addPosition = createAsyncThunk(
  "positions/add",
  async (newPosition: Position, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/positions", newPosition);
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Lỗi thêm mới");
    }
  }
);

const positionSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPositions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addPosition.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default positionSlice.reducer;