import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function App() {
    const info = useLocalSearchParams();
  return (
    <View>
      <Text>Information{info.Skull}</Text>
      <Text>Information{info.Toy}</Text>
    </View>
  )
}