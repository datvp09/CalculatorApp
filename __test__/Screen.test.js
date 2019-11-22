import "react-native"
import React from "react"
import Screen from "../src/Screen"
import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore()
const store = mockStore({ calReducer: { output: "0" } })

describe("Screen", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = renderer
        .create(
          <Provider store={store}>
            <Screen />
          </Provider>
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
