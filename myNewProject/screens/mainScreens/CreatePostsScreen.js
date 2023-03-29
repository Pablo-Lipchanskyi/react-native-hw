import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CreatePostsScreen = ({ navigation }) => {
  const [postName, setPostName] = useState("");
  const [postPlace, setPostPlace] = useState("");
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const postNameHandler = (text) => setPostName(text);
  const postPlaceHandler = (text) => setPostPlace(text);

  const onSubmitHandler = () => {
    console.log(`postName: ${postName}, postPlace: ${postPlace}`);
    setPostPlace("");
    setPostName("");
    navigation.navigate("Posts");
  };
  const keyBoardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.postsContainer}>
        <View style={styles.postPictureTemplate}>
          <View style={styles.postPictureItem}>
            <Ionicons name="camera-sharp" size={20} color="#BDBDBD" />
          </View>
        </View>
        <Text style={styles.loadLabel}>Завантажте текст</Text>
        <View style={styles.formBox}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={postName}
              onChangeText={postNameHandler}
              placeholder="Назва..."
              style={styles.input}
              onFocus={() => setIsKeyboardShow(true)}
            />
            <View
              style={{
                ...styles.addPlaceContainer,
                marginBottom: isKeyboardShow ? 62 : 89,
              }}
            >
              <TextInput
                value={postPlace}
                onChangeText={postPlaceHandler}
                placeholder="Місцевість..."
                style={[styles.input, styles.addPlace]}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <Ionicons
                style={styles.locationIcon}
                name="location-outline"
                size={22}
                color="#BDBDBD"
              />
            </View>
            <TouchableOpacity
              title={"Опублікувати"}
              onPress={onSubmitHandler}
              accessibilityLabel="Опублікувати"
              style={[
                {
                  backgroundColor:
                    postName && postPlace ? "#FF6C00" : "#F6F6F6",
                },
                styles.submitButton,
              ]}
            >
              <Text
                style={[
                  {
                    color: postName && postPlace ? "#fff" : "#BDBDBD",
                  },
                  styles.submitButtonLabel,
                ]}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#fff",
  },
  postPictureTemplate: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 8,
  },
  postPictureItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  loadLabel: {
    color: "#BDBDBD",
    marginBottom: 48,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
  },
  formBox: {
    width: "100%",
  },
  input: {
    width: "100%",
    fontFamily: "Roboto",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    height: 48,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  submitButton: {
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 32,
    marginBottom: 16,
  },
  submitButtonLabel: {
    textAlign: "center",
    fontFamily: "Roboto",
  },
  addPlaceContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    border: "1px solid #E8E8E8",
    position: "relative",
  },
  locationIcon: {
    position: "absolute",
    top: 10,
    left: 4,
  },
  addPlace: {
    paddingLeft: 28,
  },
});

export default CreatePostsScreen;