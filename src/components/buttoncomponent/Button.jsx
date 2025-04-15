// components/AppButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../../utils/styles/Commoncompontnt";

const AppButton = ({ title, onPress, disabled = false, style = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

