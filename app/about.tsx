import { Text, View } from 'react-native';
import { Container } from '../components/Container';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../components/Navigation';
import { useTheme } from '../context/ThemeContext';

export default function AboutScreen() {
  const { isDark } = useTheme();
  
  return (
    <Container>
      <View className="flex-1 items-center justify-center">
        <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          About Screen
        </Text>
        <Text className={`mt-2 text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          This is the about page using file-based routing
        </Text>
        <Navigation />
      </View>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </Container>
  );
}
