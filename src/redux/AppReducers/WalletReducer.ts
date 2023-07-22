import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
  account: string | undefined;
}

const initialState: initial_state = {
  account: undefined,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAccount: (state, { payload }: { payload: string | undefined }) => {
      state.account = payload;
    },
  },
});

export const {setAccount} = walletSlice.actions;
export default walletSlice.reducer;
