// import React, { useState } from "react";
// import { View, Button } from "react-native";
// import Form from "../../components/formcomponent/Form";

// const LoginScreen = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     console.log("Login Data:", formData);
//   };

//   const loginFields = [
//     { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
//     { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
//   ];

//   return (
//     <View>
//       <Form fields={loginFields} values={formData} onChange={handleChange} />
//       <Button title="Login" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default LoginScreen;
// screens/LoginScreen.js
import React, { useState } from "react";
import { View, Alert,Button } from "react-native";
import Form from "../../components/formcomponent/Form";
import AppButton from "../../components/buttoncomponent/Button"; //custom button component

const LoginScreen = ({route,navigation}) => {
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

    // Success — Log or process login
    console.log("Login Data:", formData);
    Alert.alert("Success", "Logged in successfully!");
  };

  const loginFields = [
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Form fields={loginFields} values={formData} onChange={handleChange} errors={errors} />
      <AppButton title="Login" onPress={handleSubmit} />
      <AppButton
        title="Go Gallary"
        onPress={() => navigation.navigate('ImagesScreen')}
      />
    </View>
  );
};

export default LoginScreen;
