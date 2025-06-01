import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { useTheme } from 'context/ThemeContext'


const LoginPage = () => {
  const { isDark } = useTheme()
  
  return (
    <ScrollView>
      <View className={`flex min-h-screen w-full p-[1rem] ${isDark ? "bg-black" : "bg-white"}`}>
        <Text className={`text-[2rem] mt-[2rem] font-playfair-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Every Note
        </Text>
        
        <Text className={`mt-[2rem] font-poppins text-[1rem] ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Capture your thoughts, your way.
          {/* <br /> */}
          Text, Voice or Media<Text className='font-tagesschrift'>-EveryNote </Text>
          makes it effortless to record your day and reflect with AI-powered clarity.
        </Text>

        <View className='items-center justify-center mt-[2rem]'>
          
           <Image
              // source={require('../../assets/google.png')}
              source={require('../../assets/image.png')}
              style={{ width: 350, height: 350 }}
              resizeMode="contain"
            />
        </View>

        <View className='mt-[2rem] flex-col items-center justify-center gap-[1rem] w-full'>
          <TouchableOpacity 
            className={`flex-row items-center justify-center p-3 rounded-[2rem] w-full shadow-sm ${isDark ? 'bg-white' : 'bg-black'}`}
            onPress={() => {
              // Add your Google authentication logic here
              console.log("Google sign-in pressed");
            }}
            activeOpacity={0.7}
          >
            <Image
              source={require('../../assets/google.png')}
              style={{ width: 34, height: 34 }}
              resizeMode="contain"
            />
            <Text className={`text-[1rem] ml-[1rem] font-poppins ${isDark ? 'text-black' : 'text-white'}`}>
              Sign in with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className={`flex-row items-center justify-center p-3 rounded-[2rem] w-full shadow-sm ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}
            onPress={() => {
              // Add your Google authentication logic here
              console.log("Google sign-in pressed");
            }}
            activeOpacity={0.7}
          >
            <Image
              source={require('../../assets/apple.png')}
              style={{ width: 34, height: 34 }}
              resizeMode="contain"
            />
            <Text className={`text-[1rem] ml-[1rem] font-poppins ${isDark ? 'text-white' : 'text-black'}`}>
              Sign in with Apple
            </Text>
          </TouchableOpacity>


            <Text className={ `text-center text-lg mt-4 ${isDark? "text-gray-500":"text-black"}`}>By countinuing, you  aggree to our tearms of services and Privacy Policy </Text>


        </View>
      </View>
    </ScrollView>
  )
}

export default LoginPage