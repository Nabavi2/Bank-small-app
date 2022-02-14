import * as Yup from "yup";
import { Formik } from "formik";
import { useState, } from 'react';
import {
  Alert,
  TextInput,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView, Box } from 'native-base'
import { Text } from "../components/Themed";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

function LoginScreen() {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handlePasswordFocused = () => {
    setIsPasswordFocused(true);
  };
  const handleEmailFocused = () => {
    setIsEmailFocused(true);
  };


  const authHandler = async (email: string, password: string) => {
    setIsLoading(true);
    let action: Function;
    if (isSignup) {
      try {
        navigation.navigate("Home");
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        alert(error.message);
      }
    } else {
      try {
        navigation.navigate("Home");
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        alert(error.message);
      }
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email('Invalid email format, your email must have "@" and ".com"')
      .label("Email"),
    password: Yup.string()
      .trim()
      .min(6, `your password should be at least ${6} character`)
      .required("Please Enter your password"),
    confirmPassword: isSignup
      ? Yup.string().trim().required("Please Reenter your password")
      : Yup.string(),
  });

  const navigation = useNavigation();
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  let login = "Login";
  let signUp = "signUp";
  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <View style={styles.screen}>
        {/* <Image
          style={{
            width: "75%",
            height: 100,
            marginTop: "17%",
            marginBottom: "10%",
          }}
          source={require("../assets/images/nt.png")}
        /> */}
        <Text style={{ color: "#FFF", fontSize: 35, marginBottom: "15%", fontWeight: 'bold', marginTop: 100 }}>
          Welcome
        </Text>
        <Text style={{ color: "#FFF", fontSize: 20, marginBottom: "15%", alignSelf: 'center', marginHorizontal: 30, }}>
          Start your business on this app       </Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={async (values) => {
            if (isSignup && values.password !== values.confirmPassword) {
              Alert.alert("Attention!", "Passwords don't match together!", [
                { text: "Ok", style: "destructive" },
              ]);
            } else {
              await authHandler(values.email, values.password);
            }
          }}
          validateOnMount={true}
        >
          {({
            values,
            errors,
            handleBlur,
            touched,
            handleChange,
            submitForm,
          }) => {
            const { email, password } = values;
            return (
              <>
                <View style={styles.cart}>
                  <View style={styles.container}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialIcons
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                          marginRight: 10,
                        }}
                        name="email"
                        size={28}
                        color={Colors.primary}
                      />
                      <TextInput
                        style={[
                          styles.input,
                          {
                            borderColor: isEmailFocused
                              ? Colors.secondary
                              : Colors.primary,
                          },
                        ]}
                        onFocus={handleEmailFocused}
                        placeholder="Email"
                        placeholderTextColor={Colors.primary}
                        keyboardType="email-address"
                        onBlur={handleBlur("email")}
                        value={email}
                        onChangeText={handleChange("email")}
                      />
                    </View>
                    {errors ? (
                      <Text
                        style={{
                          color: "red",
                          width: "70%",
                          paddingHorizontal: 10,
                        }}
                      >
                        {touched.email && errors.email}
                      </Text>
                    ) : null}
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                          marginRight: 10,
                        }}
                        name="lock"
                        size={28}
                        color={Colors.primary}
                      />
                      <TextInput
                        style={[
                          styles.input,
                          {
                            borderColor: isPasswordFocused
                              ? Colors.secondary
                              : Colors.primary,
                          },
                        ]}
                        placeholder="Password"
                        placeholderTextColor={Colors.primary}
                        secureTextEntry={true}
                        keyboardType="default"
                        onBlur={handleBlur("password")}
                        onFocus={handlePasswordFocused}
                        textContentType="password"
                        value={password}
                        onChangeText={handleChange("password")}
                      />
                    </View>
                    {errors ? (
                      <Text style={{ color: "red" }}>
                        {" "}
                        {touched.password && errors.password}{" "}
                      </Text>
                    ) : null}
                    {isSignup ? (
                      <>
                        <View style={{ flexDirection: "row" }}>
                          <MaterialCommunityIcons
                            style={{
                              paddingTop: 10,
                              paddingBottom: 10,
                              marginRight: 10,
                            }}
                            name="lock"
                            size={28}
                            color="#FFF"
                          />
                          <TextInput
                            style={[
                              styles.input,
                              {
                                borderColor: isPasswordFocused
                                  ? Colors.secondary
                                  : Colors.primary,
                              },
                            ]}
                            placeholder="Confirm Password"
                            placeholderTextColor={Colors.primary}
                            secureTextEntry={true}
                            keyboardType="default"
                            onBlur={handleBlur("confirmPassword")}
                            onFocus={handlePasswordFocused}
                            textContentType="password"
                            value={values.confirmPassword}
                            onChangeText={handleChange("confirmPassword")}
                          />
                        </View>
                        {errors && (
                          <Text style={{ color: "red" }}>
                            {touched.confirmPassword && errors.confirmPassword}
                          </Text>
                        )}
                      </>
                    ) : null}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={submitForm.bind(values)}
                    >
                      <Text style={{ color: "#FFF", fontWeight: 'bold' }}>
                        {" "}
                        {isSignup ? "SignUp" : "Login"}{" "}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        marginTop: 20,
                        backgroundColor: "#000",
                      }}
                      onPress={() => {
                        setIsSignup((prevState) => !prevState);
                      }}
                    >
                      <View style={{ flexDirection: 'row', borderColor: Colors.secondary, borderBottomWidth: 1 }}>
                        <Box _text={{ color: Colors.white, fontSize: 18 }}>
                          Switch to
                        </Box>
                        <Text
                          style={{
                            color: "#FFF",
                            borderBottomWidth: 1,
                            fontSize: 20,
                            fontWeight: 'bold'
                          }}
                        >
                          {` ${isSignup ? "Login" : "Sign Up"}`}
                        </Text>
                      </View>

                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "column",
    width: "98%",
    height: 250,
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  input: {
    flexDirection: "row",
    backgroundColor: "#000",
    width: "80%",
    height: 40,
    borderColor: Colors.secondary,
    borderBottomWidth: 1,
    color: "#FFF",
  },
  button: {
    backgroundColor: Colors.secondary,
    width: "90%",
    height: 40,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  cart: {
    backgroundColor: "#000",
    width: "85%",
    height: Dimensions.get("screen").height * 0.46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;