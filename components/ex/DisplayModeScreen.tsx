import { setGridMode, setListMode } from "@/redux/displaySlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function DisplayModeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const mode = useSelector((state: RootState) => state.display.mode);

  const data = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.button, mode === "list" && styles.activeButton]}
          onPress={() => dispatch(setListMode())}
        >
          <Text style={[styles.text, mode === "list" && styles.activeText]}>
            List mode
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, mode === "grid" && styles.activeButton]}
          onPress={() => dispatch(setGridMode())}
        >
          <Text style={[styles.text, mode === "grid" && styles.activeText]}>
            Grid mode
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        key={mode === "grid" ? "g" : "l"} 
        numColumns={mode === "grid" ? 2 : 1}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeButton: {
    backgroundColor: "#4C5EFF",
    borderColor: "#4C5EFF",
  },
  text: { color: "#000", fontWeight: "600" },
  activeText: { color: "#fff" },
  list: { alignItems: "center" },
  item: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 5,
    flex: 1,
    height: 100,
  },
  itemText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});