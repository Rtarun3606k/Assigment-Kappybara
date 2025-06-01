import { Text, View } from 'react-native';
import { Container } from '../components/Container';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function HomeScreen() {
  const { isDark } = useTheme();
  
  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Home Screen
        </Text>
        <Text className={`mt-2 text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          This is the main screen of your app using file-based routing
        </Text>
        <ThemeToggle />
        <Navigation />
      </View>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </Container>
  );
}
