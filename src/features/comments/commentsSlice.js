import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/oldData/COMMENTS";

const initialState = {
  commentsArray: COMMENTS,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComment: (state, action) => {
      const comment = {
        id: state.commentsArray.length + 1,
        ...action.payload,
      };
      state.commentsArray.push(comment);
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
