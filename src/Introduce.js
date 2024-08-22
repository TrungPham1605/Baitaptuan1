import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Introduce = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer); // Xóa timer khi component bị unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giới thiệu bản thân</Text>
      <Text style={styles.text}>Tên: Phạm Quốc Trung</Text>
      <Text style={styles.text}>MSSV: 21110336</Text>
      <Text style={styles.text}>Tuổi: 21</Text>
      <Text style={styles.text}>Giới tính: Nam</Text>
      <Text style={styles.text}>Sinh viên Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Introduce;
