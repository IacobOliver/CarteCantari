import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <>
      <TouchableOpacity
        onPressIn={(e) => (this.touchX = e.nativeEvent.pageX)}
        onPress={(e) => {
          if (this.touchX - e.nativeEvent.pageX < -50) return;
          else props.onPress();
        }}
        style={props.style}
        disabled={props.disabled}
      >
        <Text numberOfLines={1} style={[props.textStyle]}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
