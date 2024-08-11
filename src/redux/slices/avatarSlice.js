import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  themeName: '',
  avatarName: '',
  imageUrl: '',
  description: '',
  votes:0,
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    updateAvatar: (state, action) => {
      const { userName, themeName, avatarName, imageUrl, description } = action.payload;
      state.userName = userName;
      state.themeName = themeName;
      state.avatarName = avatarName;
      state.imageUrl = imageUrl;
      state.description = description;
    },
    updateVotes: (state) => {
        state.votes += 1; // Increment votes
      }
  }
});

export const { updateAvatar, updateVotes } = avatarSlice.actions;
export default avatarSlice.reducer;
