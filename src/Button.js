import React from "react"
import { View, TouchableHighlight, Text } from "react-native"
import styles from "./styles"

const Button = React.memo(props => (
  <TouchableHighlight
    style={[styles.buttonStyles, props.style]}
    onPress={props.onPress}
    underlayColor="#777"
  >
    <View style={[styles.contButton, { borderRadius: 5 }]}>
      <Text style={styles.txtButtons}>{props.text}</Text>
    </View>
  </TouchableHighlight>
))

export default Button
