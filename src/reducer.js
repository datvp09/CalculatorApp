import { combineReducers } from "redux"
import calReducer from "./actions"
import { initialOutput } from "./constants"

const reducer = combineReducers({
  calReducer
  // more reducers
})

const _handleEvent = (value, props) => {
  if (value == "C") {
    props.clear()
  } else if (value == "=") {
    props.evaluate()
  } else {
    let strLastChar = props.output.slice(-1)

    // new expression replace old expression
    if (isNaN(strLastChar) && isNaN(value)) {
      props.replace(value)
    } else if (props.output !== initialOutput || isNaN(value)) {
      props.concat(value)
    } else {
      props.concatwithout(value)
    }
  }
}

export { _handleEvent }

export default reducer
