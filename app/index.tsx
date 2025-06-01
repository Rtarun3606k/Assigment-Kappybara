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
        <Text className={`text-xl font-playfair-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Home Screen
        </Text>
        <Text className={`mt-2 text-center font-poppins ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          This is the main screen of your app using file-based routing
        </Text>
        
        {/* Font examples */}
        <View className="mt-8 items-center">
          <Text className="font-poppins-bold text-lg mb-1">Poppins Bold</Text>
          <Text className="font-space text-lg mb-1">Space Grotesk</Text>
          <Text className="font-tagesschrift text-lg mb-1">Tagesschrift</Text>
          <Text className="font-playfair text-lg">Playfair Display</Text>
        </View>
        
        <ThemeToggle />
        <Navigation />
      </View>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </Container>
  );
}
