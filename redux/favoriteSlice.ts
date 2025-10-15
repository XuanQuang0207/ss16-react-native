import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Account {
  id: number;
  name: string;
  isFavorite: boolean;
  likes: number;
}

interface FavoriteState {
  accounts: Account[];
}

const initialState: FavoriteState = {
  accounts: [
    { id: 1, name: "Nguyễn Văn A", isFavorite: false, likes: 12 },
    { id: 2, name: "Trần Thị B", isFavorite: true, likes: 5 },
    { id: 3, name: "Phạm Văn C", isFavorite: false, likes: 9 },
  ],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const account = state.accounts.find((a) => a.id === action.payload);
      if (account) {
        account.isFavorite = !account.isFavorite;
        account.likes += account.isFavorite ? 1 : -1;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;