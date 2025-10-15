import { toggleFavorite } from "@/redux/favoriteSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteAccountScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const accounts = useSelector((state: RootState) => state.favorites.accounts);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách tài khoản</Text>

      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.likes}>Lượt thích: {item.likes}</Text>
            </View>

            <TouchableOpacity
              style={[styles.button, item.isFavorite && styles.activeButton]}
              onPress={() => dispatch(toggleFavorite(item.id))}
            >
              <Text style={styles.buttonText}>
                {item.isFavorite ? "Đã thích" : "Thích"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  name: { fontSize: 18, fontWeight: "600" },
  likes: { fontSize: 14, color: "#555" },
  button: {
    backgroundColor: "#eee",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: "#ff4081",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});