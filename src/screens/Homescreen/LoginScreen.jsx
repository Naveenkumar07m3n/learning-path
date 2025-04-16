
import React, { useState } from "react";
import { View, Alert,Button } from "react-native";
import Form from "../../components/formcomponent/Form";
import AppButton from "../../components/buttoncomponent/Button"; //custom button component
import { useSelector } from 'react-redux';

const LoginScreen = ({route,navigation}) => {
  const registeredUser = useSelector((state) => state.user); // 👈 Get stored user
  console.log("registeredUser==>",registeredUser)
  const {  userName } = route.params ?? {};


  console.log("RegisterRoutes",userName);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    //  Validate against Redux state
    console.log("formData==>",formData.email)
    console.log("formData==>",formData.password)
    console.log( "registeredUser.email", registeredUser.email)
    console.log( "registeredUser.password", registeredUser.password)
    if (
      formData.email === registeredUser.email &&
      formData.password === registeredUser.password
    ) {
      Alert.alert("Success", "Logged in successfully!");
      navigation.navigate('ImagesScreen');
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };
  const loginFields = [
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Form fields={loginFields} values={formData} onChange={handleChange} errors={errors} />
      <AppButton title="Login" onPress={handleSubmit} />
      {/* <AppButton
        title="Go Gallary"
        onPress={() => navigation.navigate('ImagesScreen')}
      /> */}
    </View>
  );
};

export default LoginScreen;
