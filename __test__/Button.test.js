import "react-native"
import React from "react"
import Button from "../src/Button"
import renderer from "react-test-renderer"

describe("Button", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = renderer
        .create(<Button text={"9"} onPress={() => {}} style={{}} />)
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
