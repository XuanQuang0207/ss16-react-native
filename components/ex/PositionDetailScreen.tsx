import React from "react";
import { Text, View } from "react-native";

export default function PositionDetailScreen({ route }: any) {
  const { position } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 20,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
          Tên vị trí: {position.positionName}
        </Text>

        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          Mô tả: {position.description}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: position.positionStatus === "ACTIVE" ? "green" : "red",
          }}
        >
          Trạng thái:{" "}
          {position.positionStatus === "ACTIVE"
            ? "Đang hoạt động"
            : "Không hoạt động"}
        </Text>
      </View>
    </View>
  );
}