import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/ThemeContext';
import '../global.css';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

// Keep splash screen visible while loading fonts
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Playfair-Regular': require('../assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf'),
    'Playfair-Bold': require('../assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'),
    'SpaceGrotesk-Regular': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf'),
    'SpaceGrotesk-Bold': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf'),
    'Tagesschrift': require('../assets/fonts/Tagesschrift/Tagesschrift-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
