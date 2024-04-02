import { NativeBaseProvider, StatusBar } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { TEMAS } from './src/styles/tema';


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[400]}></StatusBar>
      <Home></Home>
    </NativeBaseProvider>
  );
}


