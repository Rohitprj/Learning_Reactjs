import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const calender = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onDayPress = (day) => {
    if (!startDate) {
      setStartDate(day.dateString);
    } else if (!endDate && day.dateString > startDate) {
      setEndDate(day.dateString);
    } else {
      setStartDate(day.dateString);
      setEndDate(null);
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [startDate]: { selected: true, color: "green", textColor: "white" },
          [endDate]: { selected: true, color: "red", textColor: "white" },
          ...(startDate && endDate
            ? {
                [`${startDate}~${endDate}`]: {
                  color: "gray",
                  textColor: "white",
                },
              }
            : {}),
        }}
        markingType={"period"}
      />
      <Text>Start Date: {startDate || "Not selected"}</Text>
      <Text>End Date: {endDate || "Not selected"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default calender;
