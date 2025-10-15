import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddPositionScreen from "./AddPositionScreen";
import PositionDetailScreen from "./PositionDetailScreen";
import PositionListScreen from "./PositionListScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PositionList"
          component={PositionListScreen}
          options={{ title: "Quản lý Vị trí" }}
        />
        <Stack.Screen
          name="AddPosition"
          component={AddPositionScreen}
          options={{ title: "Thêm vị trí mới" }}
        />
        <Stack.Screen
          name="PositionDetail"
          component={PositionDetailScreen}
          options={{ title: "Chi tiết vị trí" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}