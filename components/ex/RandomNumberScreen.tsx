import { clearNumbers, generateRandomNumbers } from "@/redux/numberSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function RandomNumberScreen() {
  const numbers = useSelector((state: RootState) => state.numbers.numbers);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Danh sách số ngẫu nhiên</Text>

      <FlatList
        data={numbers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.number}>{item}</Text>
        )}
        ListEmptyComponent={<Text>Chưa có số nào</Text>}
      />

      <View style={styles.buttons}>
        <Button title="Tạo danh sách" onPress={() => dispatch(generateRandomNumbers())} />
        <Button title="Xóa danh sách" color="red" onPress={() => dispatch(clearNumbers())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  number: { fontSize: 24, marginVertical: 5 },
  buttons: { flexDirection: "row", marginTop: 20, gap: 10 },
});