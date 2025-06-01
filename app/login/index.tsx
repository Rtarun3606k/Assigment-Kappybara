import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'context/ThemeContext'
import ThemeToggle from 'components/ThemeToggle'

const LoginPage = () => {
  const { isDark } = useTheme()
  
  return (
    <View className={`flex h-full w-full p-[2rem] ${isDark ? "bg-black" : "bg-white"}`}>
      <Text className={`text-[2rem] mt-[2rem]  font-bold ${isDark ? 'text-white' : 'text-black'}`} >
        Every Note
      </Text>
      {/* <ThemeToggle/> */}
    </View>
  )
}

export default LoginPage

