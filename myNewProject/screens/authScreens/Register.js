import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  Pressable,
  Text,
} from "react-native";
import { register } from "../../redux/auth/auth.operations";

const photoURL =
  "https://www.yellowavatar.com/assets/img/yellowavatar_icon.png";
const image = "../../img/photo-bg.jpg";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("Basted_77");
  const [password, setPassword] = useState("RFVBGtyhn^%$34");
  const [email, setEmail] = useState("testingMail0072@gmail.com");

  const [isShowPass, setIsShowPass] = useState(true);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const displayNameHandler = (text) => setDisplayName(text.trim());
  const passwordHandler = (text) => setPassword(text.trim());
  const emailHandler = (text) => setEmail(text.trim());
  const showPassToggle = () => {
    setIsShowPass(!isShowPass);
  };

  const registerSubmit = () => {
    dispatch(register({ displayName, password, email, photoURL }));
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const keyBoardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <ImageBackground source={require(image)} style={styles.imageBg}>
        <View style={styles.registerContainer}>
          <View
            style={[
              styles.avatar,
              {
                transform: [{ translateY: -50 }, { translateX: 50 }],
              },
            ]}
          >
            <Image
              source={{
                uri: photoURL,
              }}
              style={{
                width: 120,
                height: 120,
                overflow: "hidden",
                borderRadius: 16,
              }}
            />

            <Pressable
              style={styles.addButton}
              onPress={() => {
                console.log("2023");
              }}
            >
              <MaterialIcons
                name="highlight-remove"
                size={24}
                color="#FF6C00"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  transform: [{ rotate: "45deg" }],
                }}
              />
            </Pressable>
          </View>
          <Text style={styles.registerTitle}>Реєстрація</Text>

          <View style={styles.formBox}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              keyboardVerticalOffset={300}
            >
              <TextInput
                value={displayName}
                onChangeText={displayNameHandler}
                placeholder="Логін"
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адресa електронної пошти"
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <View
                style={{
                  ...styles.showPasscontainer,
                  marginBottom: isKeyboardShow ? 62 : 89,
                }}
              >
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  secureTextEntry={isShowPass}
                  style={[styles.inputPassword, styles.input]}
                  onFocus={() => setIsKeyboardShow(true)}
                />
                <TouchableOpacity
                  onPress={showPassToggle}
                  accessibilityLabel="Показати пароль"
                  style={styles.showPass}
                >
                  <Text style={[styles.showPassLabel]}>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
          <TouchableOpacity
            onPress={registerSubmit}
            accessibilityLabel="Зареєструватися"
            style={styles.buttonRegister}
          >
            <Text style={styles.buttonRegisterLabel}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            accessibilityLabel="Зареєструватися"
            style={{
              marginBottom: isKeyboardShow ? 16 : 78,
            }}
          >
            <Text style={styles.linkRegister}>Вже маєте акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    position: "relative",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: 0,
    right: "50%",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  registerTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  formBox: {
    width: "100%",
  },
  input: {
    width: "100%",
    fontFamily: "Roboto",
    height: 48,
    padding: 16,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #E8E8E8",
  },
  showPasscontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginBottom: 62,
    borderRadius: 8,
    border: "1px solid #E8E8E8",
    position: "relative",
  },

  showPassLabel: {
    position: "absolute",
    fontFamily: "Roboto",
    top: 12,
    right: 16,
    height: 25,
    fontSize: 16,
    color: "#1B4371",
  },

  buttonRegister: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    width: "100%",
    height: 48,
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonRegisterLabel: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  linkRegister: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default Register;