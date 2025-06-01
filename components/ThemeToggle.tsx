import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme();
  
  return (
    <View className="mt-8">
      <Text className={`mb-4 text-center text-lg font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </Text>
      
      <View className="flex-row justify-center space-x-3">
        <ThemeButton 
          label="Light" 
          isActive={theme === 'light'} 
          onPress={() => setTheme('light')} 
          isDark={isDark}
        />
        <ThemeButton 
          label="Dark" 
          isActive={theme === 'dark'} 
          onPress={() => setTheme('dark')} 
          isDark={isDark}
        />
        <ThemeButton 
          label="System" 
          isActive={theme === 'system'} 
          onPress={() => setTheme('system')} 
          isDark={isDark}
        />
      </View>
    </View>
  );
}

interface ThemeButtonProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  isDark: boolean;
}

const ThemeButton = ({ label, isActive, onPress, isDark }: ThemeButtonProps) => {
  const activeClass = isActive 
    ? isDark ? 'bg-blue-500' : 'bg-blue-600' 
    : isDark ? 'bg-gray-700' : 'bg-gray-200';
  
  const textClass = isActive 
    ? 'text-white' 
    : isDark ? 'text-white' : 'text-gray-800';

  return (
    <Pressable 
      className={`rounded-md px-4 py-2 ${activeClass}`}
      onPress={onPress}
    >
      <Text className={textClass}>{label}</Text>
    </Pressable>
  );
};
