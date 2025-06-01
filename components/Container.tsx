import { SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useTheme();
  
  return (
    <SafeAreaView 
      className={`flex-1 p-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      {children}
    </SafeAreaView>
  );
};
