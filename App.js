
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/LoginScreen';
import CustomButton from './components/CustomButton';
import CustomText from './components/CustomText';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
     <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
    
  },
});
