import { createActions, handleActions } from "redux-actions"
import { initialOutput } from "./constants"

export const {
  clear,
  evaluate,
  replace,
  concat,
  concatwithout
} = createActions("CLEAR", "EVALUATE", "REPLACE", "CONCAT", "CONCATWITHOUT")

const initialState = {
  output: initialOutput
}

const calReducer = handleActions(
  {
    CLEAR: state => ({
      ...state,
      output: initialOutput
    }),
    EVALUATE: state => ({
      ...state,
      output: "" + eval(state.output)
    }),
    REPLACE: (state, action) => ({
      ...state,
      output: state.output.replace(/.$/, action.payload)
    }),
    CONCAT: (state, action) => ({
      ...state,
      output: state.output + "" + action.payload + ""
    }),
    CONCATWITHOUT: (state, action) => ({
      ...state,
      output: action.payload + ""
    })
  },
  initialState
)

export default calReducer
