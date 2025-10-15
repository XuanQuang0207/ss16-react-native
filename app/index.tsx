import AppNavigator from "@/components/ex/AppNavigator";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}