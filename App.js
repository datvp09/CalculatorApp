import React, { Component } from "react"
import { YellowBox } from "react-native"
import { Provider } from "react-redux"
import { createStore } from "redux"
import Screen from "./src/Screen"
import reducer from "./src/reducer"

YellowBox.ignoreWarnings(["Remote debugger"])
const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    )
  }
}
