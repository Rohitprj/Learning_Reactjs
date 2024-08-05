// import React from "react";
// import { View } from "react-native";
// import { Calendar, CalendarList, Agenda } from "react-native-calendars";

// // Helper function to generate a date range
// const generateDateRange = (startDate, endDate) => {
//   const dates = {};
//   let currentDate = new Date(startDate);
//   const end = new Date(endDate);

//   while (currentDate <= end) {
//     const formattedDate = currentDate.toISOString().split("T")[0]; // format as YYYY-MM-DD
//     dates[formattedDate] = {
//       color: "gray", // Range color
//       textColor: "white",
//     };
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// // Sample component
// const MyCalendar = () => {
//   const startDate = startDate; // Example start date
//   const endDate = endDate; // Example end date

//   const markedDates = {
//     [startDate]: {
//       selected: true,
//       color: "blue",
//       textColor: "white",
//     },
//     [endDate]: {
//       selected: true,
//       color: "blue",
//       textColor: "white",
//     },
//     ...generateDateRange(startDate, endDate),
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Calendar
//         markedDates={markedDates}
//         markingType={"period"} // Use 'period' to indicate a range
//       />
//     </View>
//   );
// };

// export default MyCalendar;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { Calendar } from "react-native-calendars";

// // Helper function to generate a date range
// const generateDateRange = (startDate, endDate) => {
//   const dates = {};
//   let currentDate = new Date(startDate);
//   const end = new Date(endDate);

//   while (currentDate <= end) {
//     const formattedDate = currentDate.toISOString().split("T")[0]; // format as YYYY-MM-DD
//     dates[formattedDate] = {
//       color: "#d9d2f9", // Range color
//       textColor: "white",
//     };
//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return dates;
// };

// const MyCalendar = () => {
//   const [selectedStartDate, setSelectedStartDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);

//   const handleDayPress = (day) => {
//     const selectedDate = day.dateString;

//     if (!selectedStartDate) {
//       setSelectedStartDate(selectedDate);
//       setSelectedEndDate(null); // Reset end date if start date is selected
//     } else if (
//       !selectedEndDate &&
//       new Date(selectedDate) >= new Date(selectedStartDate)
//     ) {
//       setSelectedEndDate(selectedDate);
//     } else {
//       // Reset if a new range is started before the current range
//       setSelectedStartDate(selectedDate);
//       setSelectedEndDate(null);
//     }
//   };

//   const markedDates = {
//     ...generateDateRange(selectedStartDate, selectedEndDate),
//     [selectedStartDate]: {
//       selected: true,
//       color: "#7C62EC",
//       textColor: "white",
//     },
//     [selectedEndDate]: {
//       selected: true,
//       color: "#7C62EC",
//       textColor: "white",
//     },
//   };

//   return (
//     <View style={styles.container}>
//       <Calendar
//         onDayPress={handleDayPress}
//         markedDates={markedDates}
//         markingType={"period"}
//       />
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>
//           Start Date: {selectedStartDate || "None"}
//         </Text>
//         <Text style={styles.infoText}>
//           End Date: {selectedEndDate || "None"}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   infoContainer: {
//     marginTop: 20,
//   },
//   infoText: {
//     fontSize: 16,
//   },
// });

// export default MyCalendar;

import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useItineraryContext } from "@/contexts/ItineraryContext";
import { Calendar, DateData } from "react-native-calendars";
import Colors from "@/constants/Colors";

export default function SpecificationTab() {
  const [showDate, setShowDate] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onDayPress = (day) => {
    if (!startDate) {
      setStartDate(day.dateString);
    } else if (!endDate && day.dateString > startDate) {
      setEndDate(day.dateString);
    } else {
      setStartDate(day.dateString);
      setEndDate("");
    }
  };

  const { specification } = useItineraryContext();

  const handleDate = () => {
    setShowDate(!showDate);
  };
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.specificationsDetails}>
          <Pressable onPress={handleDate}>
            <Text style={styles.date}>
              {startDate || "yy/mm/dd"} - {endDate || "yy/mm/dd"}
            </Text>
            {showDate && (
              <View style={styles.calendar}>
                <Calendar
                  theme={{
                    calendarBackground: "white",
                  }}
                  onDayPress={onDayPress}
                  markingType={"period"}
                  markedDates={{
                    [startDate]: {
                      selected: true,
                      color: Colors.listSecondaryBackground,
                      textColor: "white",
                    },
                    [endDate]: {
                      selected: true,
                      color: Colors.listSecondaryBackground,
                      textColor: "white",
                    },
                    ...(startDate && endDate
                      ? {
                          [`${startDate}~${endDate}`]: {
                            color: "gray",
                            textColor: "white",
                          },
                        }
                      : {}),
                  }}
                />
                <Pressable
                  onPress={() => setShowDate(false)}
                  style={{
                    borderWidth: 2,
                    borderColor: "black",
                    height: 30,
                    width: 80,
                    borderRadius: 20,
                    alignSelf: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    Done
                  </Text>
                </Pressable>
              </View>
            )}
          </Pressable>

          <Text style={styles.friend}>Crowd - Friends</Text>
          <Text style={styles.friend}>
            {specification?.total_trip_duration || "N"}{" "}
            {specification?.duration_unit || "Days"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  calendar: {
    // left: 30,
    width: Dimensions.get("window").width - 20,
  },
  specificationsDetails: {
    flexDirection: "row",
    gap: 5,
  },
  date: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#F2F2F6",
    borderRadius: 16,
    color: "#c9c5c5",
    padding: 5,
    paddingHorizontal: 10,
    position: "relative",
  },
  friend: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#F2F2F6",
    borderRadius: 16,
    color: "#c9c5c5",
    padding: 5,
    paddingHorizontal: 10,
    maxHeight: 32,
  },
});

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
