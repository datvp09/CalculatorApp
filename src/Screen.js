import React from "react"
import { View, Text } from "react-native"
import { numberButtons, mathButtons, isIpX } from "../src/constants"
import styles from "../src/styles"
import Button from "../src/Button"
import { connect } from "react-redux"
import { _handleEvent } from "./reducer"

const Screen = props => (
  <View style={[styles.container, isIpX && { marginBottom: 34 }]}>
    <View style={styles.statusBar} />
    <View style={styles.placeHolderOutput}>
      <Text style={styles.txtDefault}>{props.output}</Text>
    </View>
    <View style={styles.contRow}>
      <View style={styles.flexNumbers}>
        {numberButtons.map((row, index) => (
          <View key={index} style={styles.contRow}>
            {row.map((col, index) => (
              <Button
                key={index}
                onPress={() => _handleEvent(col, props)}
                text={col}
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.container}>
        {mathButtons.map((row, index) => (
          <Button
            style={{ marginRight: 10 }}
            key={index}
            onPress={() => _handleEvent(row, props)}
            text={row}
          />
        ))}
      </View>
    </View>
  </View>
)

const mapStateToProps = state => ({ output: state.calReducer.output })
const mapDispatchToProps = dispatch => {
  const {
    clear,
    evaluate,
    replace,
    concat,
    concatwithout
  } = require("./actions")
  return {
    clear: () => dispatch(clear()),
    evaluate: () => dispatch(evaluate()),
    replace: value => dispatch(replace(value)),
    concat: value => dispatch(concat(value)),
    concatwithout: value => dispatch(concatwithout(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
