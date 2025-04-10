
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Form = ({ fields, values, onChange, errors = {} }) => {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (name) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <View style={styles.container}>
      {fields.map((field) => {
        const error = errors[field.name];

        return (
          <View key={field.name} style={styles.inputContainer}>
            <Text style={styles.label}>{field.label}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, error && styles.inputError]}
                placeholder={field.placeholder}
                secureTextEntry={field.type === "password" && !visiblePasswords[field.name]}
                keyboardType={
                  field.type === "email"
                    ? "email-address"
                    : field.type === "phone"
                    ? "phone-pad"
                    : "default"
                }
                value={values[field.name]}
                onChangeText={(text) => onChange(field.name, text)}
              />
              {field.type === "password" && (
                <TouchableOpacity onPress={() => togglePasswordVisibility(field.name)}>
                  <Text style={styles.toggleText}>
                    {visiblePasswords[field.name] ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        );
      })}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  toggleText: {
    color: "#007bff",
    marginLeft: 10,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  inputError: {
    borderColor: "red",
  },
});

