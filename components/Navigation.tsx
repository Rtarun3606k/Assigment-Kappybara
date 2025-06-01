import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const { isDark } = useTheme();
  const buttonClass = isDark ? 'bg-blue-600' : 'bg-blue-500';
  
  return (
    <View className="flex-row justify-center space-x-4 py-4 mt-4">
      <Link href="/" asChild>
        <Pressable className={`rounded-md ${buttonClass} px-4 py-2`}>
          <Text className="text-white">Home</Text>
        </Pressable>
      </Link>
      <Link href="/about" asChild>
        <Pressable className={`rounded-md ${buttonClass} px-4 py-2`}>
          <Text className="text-white">About</Text>
        </Pressable>
      </Link>
      <Link href="/login" asChild>
        <Pressable className={`rounded-md ${buttonClass} px-4 py-2`}>
          <Text className="text-white">Login</Text>
        </Pressable>
      </Link>
     
    </View>
  );
}
