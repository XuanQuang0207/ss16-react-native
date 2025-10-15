import { addPosition } from "@/redux/positionSlice";
import { AppDispatch } from "@/redux/store";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

export default function AddPositionScreen({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const [positionName, setPositionName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  const handleAdd = async () => {
    if (!positionName) return alert("Vui lòng nhập tên vị trí");
    await dispatch(addPosition({ positionName, description, positionStatus: status }));
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Tên vị trí</Text>
      <TextInput
        value={positionName}
        onChangeText={setPositionName}
        placeholder="VD: Lập trình viên"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <Text>Mô tả</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Nhập mô tả chi tiết"
        multiline
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
          height: 80,
        }}
      />

      <TouchableOpacity
        onPress={handleAdd}
        style={{
          backgroundColor: "#0066FF",
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>THÊM VỊ TRÍ</Text>
      </TouchableOpacity>
    </View>
  );
}