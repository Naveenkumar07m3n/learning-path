
import React, { useState } from "react";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import styles  from "../../utils/styles/Commoncompontnt";

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



