import Constants from "expo-constants"
import { StyleSheet } from "react-native"
import { isiOS } from "./constants"

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: isiOS ? "transparent" : "#2c3e50",
    height: Constants.statusBarHeight
  },
  flexNumbers: {
    flex: 3
  },
  container: {
    flex: 1
  },
  contRow: {
    flex: 1,
    flexDirection: "row"
  },
  contButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd"
  },
  placeHolderOutput: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15
  },
  txtDefault: {
    color: "#000",
    fontFamily: "System",
    fontSize: 60
  },
  txtButtons: {
    color: "#000",
    fontFamily: "System",
    fontSize: 26
  },
  buttonStyles: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5
  }
})

export default styles
