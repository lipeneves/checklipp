import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
  },

  containerChecked: {
    backgroundColor: "#DCFFF0",
    borderColor: "#BAEDD9",
  },

  containerUnchecked: {
    backgroundColor: "#fff",
    borderColor: "#C4C2DC",
  },

  taskLabel: {
    fontSize: 16,
    marginLeft: 8,
    width: "80%",
  },

  taskLabelChecked: {
    color: "#97D7BC",
  },

  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  taskLabelUnchecked: {
    color: "#59549C",
  },
});
