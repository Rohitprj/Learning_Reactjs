import { View, Text, ScrollView, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
// import Car from '../assets/images/car_new.jpg'
import Car from '../assets/images/car_new.jpg'
import River from '../assets/images/img5.jpg'

export default function App() {

  const flatList = [
    {
      id: "1",
      title: "Car",
      img: Car
    },
    {
      id1: "2",
      title1: "River",
      img1: River
    }
  ]

  return (
    <ScrollView>
      <FlatList 
        data={flatList}
        renderItem={({ item }, index) => {
          return (
            <View style={{flexDirection:"row"}}>
              <Text>{item.id}</Text>
              <ImageBackground
                source={item.img}
                style={{ alignItems: "center", justifyContent: "center", height: 150, width: 150 }}>
                <Text style={{ color: "red" }}>
                  {item.title}
                </Text>
              </ImageBackground>

              <Text>{item.id1}</Text>
              <ImageBackground
                source={item.img1}
                style={{ alignItems: "center", justifyContent: "center", height: 150, width: 150 }}>
                <Text style={{ color: "red" }}>
                  {item.title1}
                </Text>
              </ImageBackground>
            </View>
          )
        }}
      />
    </ScrollView>
  )
}











      {/* <Link style={{backgroundColor:"red",width:400}} href={{
        pathname: "About us",
        params:{Skull:"Flaming skull"}
      }}>
        <Image style={{ height: 600, width: 400}} source={{ uri: "https://icon2.cleanpng.com/lnd/20240616/yal/azieey07a.webp" }} />
        About us
      </Link>

      <Link style={{backgroundColor:"red",width:400}} href={{
        pathname: "About us",
        params:{Toy:"jelly toy"}
      }}>
        <Image style={{ height: 600, width: 400}} source={{ uri: "https://www.cleanpng.com/png-gummy-bears-3d-glass-bear-transparent-glass-sculpt-8099473/" }} />
        About us
      </Link> */}