// screens/RegisterScreen.js
import React, { useState } from "react";
import { View, Alert,Button } from "react-native";
import Form from "../../components/formcomponent/Form";
import AppButton from "../../components/buttoncomponent/Button"; // if you're using a custom button

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email address";

    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // All good — submit the data
    console.log("Register Data:", formData);
    Alert.alert("Success", "Registered Successfully!");
  };

  const registerFields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter username" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
    { name: "password", label: "Password", type: "password", placeholder: "Choose a password" },
    { name: "phone", label: "Phone Number", type: "phone", placeholder: "Enter your phone number" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Form fields={registerFields} values={formData} onChange={handleChange} errors={errors} />
      <AppButton title="Register" onPress={handleSubmit} />
    </View>
  );
};

export default RegisterScreen;
