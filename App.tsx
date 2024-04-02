import { NativeBaseProvider, StatusBar } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar></StatusBar>
      <Home></Home>
    </NativeBaseProvider>
  );
}


