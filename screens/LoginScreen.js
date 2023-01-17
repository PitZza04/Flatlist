import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.taglineWrapper}>
        {/* <View style={styles.imageWrapper}> */}
        <Image
          style={{
            resizeMode: "contain",
            height: 200,
            width: "90%",
          }}
          source={require("../assets/main-icon/main-logo.png")}
        />
        <Text style={styles.tagline}>Your Personalized Mechanic</Text>
        {/* </View> */}
      </View>
      <ScrollView>
        <View style={styles.loginWrapper}>
          <View style={[styles.inputWrapper, { marginBottom: 15 }]}>
            <FontAwesome5
              name="user-alt"
              size={20}
              color="#DF3111"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              style={styles.inputText}
              value={email}
              onChangeText={setEmail}
              placeholder="Email or Mobile Number"
              name="Email"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesome5
              name="key"
              size={20}
              color="#DF3111"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              style={styles.inputText}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              name="Password"
              secureTextEntry={passwordShown}
            ></TextInput>
            <TouchableOpacity
              onPress={() => {
                setPasswordShown((prev) => !prev);
              }}
              style={{ position: "absolute", right: 0, marginRight: 10 }}
            >
              <FontAwesome5
                name={passwordShown ? "eye" : "eye-slash"}
                size={20}
                color="#DF3111"
              />
            </TouchableOpacity>
          </View>
          <Pressable style={{ marginTop: 20 }}>
            <TextInput style={styles.primaryText}>Forgot Password?</TextInput>
          </Pressable>
          <TouchableOpacity>
            <View style={styles.loginButton}>
              <Text style={styles.textLogin}>LOGIN</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.registerWrapper}>
            <Text style={styles.text}>Don't have an Account yet? Tap </Text>
            <TouchableOpacity>
              <Text style={[styles.primaryText, { fontSize: 12 }]}>here </Text>
            </TouchableOpacity>
            <Text style={styles.text}>to Register.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DF3111",
  },
  taglineWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  //   imageWrapper: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  tagline: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "black",
    textShadowRadius: 15,
  },
  loginWrapper: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10,
    width: "100%",
  },
  inputWrapper: {
    backgroundColor: "#fff",
    width: "90%",
    alignItems: "center",
    height: 50,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
  },
  inputText: {
    marginLeft: 10,
    width: "90%",
  },
  primaryText: {
    color: "#DF3111",
    fontSize: 15,
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRadius: 10,
    padding: 5,
  },
  textLogin: {
    color: "#fff",
  },
  registerWrapper: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  text: {
    fontSize: 12,
  },
});