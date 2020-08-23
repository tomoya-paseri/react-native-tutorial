import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 48,
  },
  annotationLabel: {
    padding: 16,
    margin: 16,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  annotationLabelText: {
    fontSize: 48,
    color: "#000",
  },
  snapButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  snapButtonText: {
    textAlign: "center",
    lineHeight: 80,
  },
});
