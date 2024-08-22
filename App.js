import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const IntroScreen = ({ navigation }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer);
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

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Đây là trang Homepage!</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
