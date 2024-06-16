import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App() {
  return (
    <ScrollView>
      <Link style={{backgroundColor:"red",width:400}} href={{
        pathname: "About us",
        params:{About:"Flaming skull"}
      }}>
        <Image style={{ height: 600, width: 400}} source={{ uri: "https://icon2.cleanpng.com/lnd/20240616/yal/azieey07a.webp" }} />
        About us
      </Link>

    </ScrollView>
  )
}