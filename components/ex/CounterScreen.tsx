import { decrease, increase, reset } from '@/redux/counterSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ứng dụng đếm số</Text>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(increase())}>
          <Text style={styles.text}>Tăng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(decrease())}>
          <Text style={styles.text}>Giảm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(reset())}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  number: { fontSize: 48, fontWeight: 'bold' },
  buttons: { flexDirection: 'row', marginTop: 30 },
  btn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  text: { color: '#fff', fontSize: 18 },
});