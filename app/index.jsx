import { View, Text } from 'react-native'
import React from 'react'

// import tailwind from 'twrnc'
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-white`}>App</Text>
    </View>
  )
}