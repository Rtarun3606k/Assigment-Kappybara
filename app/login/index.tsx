import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';

export default function LoginScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#000000';
  const bgColor = isDark ? '#121212' : '#FFFFFF';
  
  const handleGoogleLogin = () => {
    // OAuth logic will go here
    console.log('Google login pressed');
    // After successful login:
    // router.push('/');
  };
  
  const handleAppleLogin = () => {
    console.log('Apple login pressed');
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>EveryNote</Text>
      <Text style={[styles.subtitle, { color: textColor }]}>Login to continue</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleGoogleLogin}
      >
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={handleAppleLogin}
      >
        <Text style={styles.buttonText}>Login with Apple</Text>
      </TouchableOpacity>
      
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
