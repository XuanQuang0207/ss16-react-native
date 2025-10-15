import { fetchPositions } from "@/redux/positionSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function PositionListScreen({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((state: RootState) => state.positions);

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          backgroundColor: "green",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("AddPosition")}
      >
        <Text style={{ color: "#fff" }}>+ Thêm vị trí</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 10,
              marginVertical: 6,
              elevation: 2,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.positionName}</Text>
            <Text style={{ color: "gray" }}>{item.description}</Text>
            <Text
              style={{
                color: item.positionStatus === "ACTIVE" ? "green" : "red",
                marginTop: 5,
              }}
            >
              {item.positionStatus === "ACTIVE"
                ? "Đang hoạt động"
                : "Không hoạt động"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}