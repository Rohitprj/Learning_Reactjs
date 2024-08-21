import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const MyDateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  // const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [displayStartDate, setDisplayStartDate] = useState("");
  const [displayEndDate, setDisplayEndDate] = useState("");

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
    const formattedDate = currentDate.toLocaleDateString();
    setDisplayStartDate(formattedDate);
    console.log("Start Date:", currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
    const formattedDate = currentDate.toLocaleDateString();
    setDisplayEndDate(formattedDate);
    console.log("End Date:", currentDate);
  };

  // const showStartDatePickerModal = () => {
  //   setShowStartDatePicker(true);
  // };

  // const showEndDatePickerModal = () => {
  //   setShowEndDatePicker(true);
  // };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button onPress={showStartDatePickerModal} title="Select Start Date" /> */}
      {/* {showStartDatePicker && ( */}
      {/* <View style={{ marginBottom: 50 }}> */}
      <DateTimePicker
        value={startDate}
        mode="time"
        is24Hour={false}
        display="spinner"
        onChange={handleStartDateChange}
      />
      {/* </View> */}
      {/* )} */}

      {/* <Button onPress={showEndDatePickerModal} title="Select End Date" /> */}
      {/* {showEndDatePicker && ( */}
      {/* <View style={{ marginTop: 50 }}> */}
      <DateTimePicker
        value={endDate}
        mode="time"
        is24Hour={false}
        display="spinner"
        onChange={handleEndDateChange}
      />
      {/* </View> */}
      {/* )} */}

      <View style={{ marginTop: 20 }}>
        <Text>Start Date: {displayStartDate}</Text>
        <Text>End Date: {displayEndDate}</Text>
      </View>
    </View>
  );
};

export default MyDateTimePicker;
