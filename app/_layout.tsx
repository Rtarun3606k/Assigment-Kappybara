import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/ThemeContext';
import '../global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        {/* <Stack.Screen name="login" options={{ title: 'Login' }} /> */}
      </Stack>
    </ThemeProvider>
  );
}
