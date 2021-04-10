import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
//import loginimg from "../../assets/loginimg.png";

const RegisterScreen = (/*{ navigation }*/) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            height: 150,
            width: "100%",
            position: "absolute",
            top: -1,
            left: 0,
            right: 0,
            backgroundColor: "#6e78f7",
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}
        />
        <Card
          style={{
            marginTop: 55,
            alignItems: "center",
            width: "80%",
            height: 500,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              height: 40,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <FontAwesome
              name="user"
              size={20}
              color="#6e78f7"
              style={{ marginTop: 7, marginLeft: 3 }}
            />
            <TextInput
              style={{
                width: "76%",
                height: "100%",
                marginLeft: 10,
              }}
              value={fullName}
              placeholder="Nom et prénom"
              onChangeText={(t) => setFullName(t)}
              underlineColorAndroid="transparent"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              height: 40,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <Ionicons
              size={20}
              name="mail"
              color="#6e78f7"
              style={{ marginTop: 7, marginLeft: 3 }}
            />
            <TextInput
              style={{
                width: "75%",
                height: "100%",
                marginLeft: 10,
                // borderWidth: 1,
                // borderColor: "lightgray" /* "#6e78f7"*/,
              }}
              type="mail"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(t) => setEmail(t)}
              underlineColorAndroid="transparent"
            />
          </View>
          {/*<Text>your email : {password}</Text>*/}
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              height: 40,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={20}
              color="#6e78f7"
              style={{
                marginTop: 7,
                marginLeft: 3 /*, borderWidth: 1, borderColor: "lightgray" */,
              }}
            />
            <TextInput
              style={{
                width: "75%",
                height: "100%",
                marginLeft: 10,
              }}
              type="password"
              value={password}
              secureTextEntry={!isShowPassword}
              placeholder="Mot de passe"
              onChangeText={(p) => setPassword(p)}
            />
          </View>
          {/*<Text>your email : {password1}</Text>*/}
          <View
            style={{
              flexDirection: "row",
              borderRadius: 5,
              height: 40,
              marginTop: 30,
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={20}
              color="#6e78f7"
              style={{
                marginTop: 7,
                marginLeft: 3,
              }}
            />
            <TextInput
              style={{
                width: "66%",
                height: "100%",
                marginLeft: 10,
              }}
              type="password"
              value={password1}
              secureTextEntry={!isShowPassword}
              placeholder="Retaper le mot de passe"
              onChangeText={(p) => setPassword1(p)}
            />
            {isShowPassword ? (
              <Entypo
                name="eye"
                size={20}
                color="#6e78f7"
                style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }}
                onPress={() => setIsShowPassword(!isShowPassword)}
              />
            ) : (
              <Entypo
                name="eye-with-line"
                size={20}
                color="gray"
                style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }}
                onPress={() => setIsShowPassword(!isShowPassword)}
              />
            )}
          </View>
          <View style={{ marginTop: 30 }}>
            <Button
              title="   S'incrire   "
              color="#6e78f7"
              onPress={() => alert("Connect")}
            />
          </View>
        </Card>
      </View>
    </>
  );
};

export default RegisterScreen;
