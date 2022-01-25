import { createSlice } from '@reduxjs/toolkit'

const initialState = { mailBody: null, mail: null }
export const mail = createSlice({
  name: 'mail',
  initialState: initialState,
  reducers: {
    setMailBody: (state, action) => {
      state.mailBody = action.payload
    },
    setMail: (state, action) => {
      state.mail = action.payload
    },
  },
})

export const { setMailBody, setMail } = mail.actions
export default mail.reducer
