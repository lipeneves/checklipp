import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FAFAFF",
    alignItems: "center",
  },

  logo: {
    width: 240,
    height: 54,
    marginTop: 56,
    marginBottom: 36,
  },

  tasksLabel: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: "center",
  },

  tasksCount: {
    fontSize: 32,
    color: "#4D1BFD",
    fontWeight: "500",
  },

  dateText: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 36,
  },

  form: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 24,

    //Shadow
    shadowColor: "#282F54",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#FFFFFF",
    color: "#121B47",
    fontSize: 18,
    padding: 16,
    borderRadius: 12,
  },

  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4E1BFF",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },

  textButton: {
    color: "#FFF",
    fontSize: 24,
  },

  containerChips: {
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 24,
  },

  chips: {
    flexDirection: "row",
  },

  emptyList: {
    color: "#59549C",
    textAlign: "center",
  },
});
