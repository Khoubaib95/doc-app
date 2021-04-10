import React, { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import loginimg from "../../assets/loginimg.png";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "flex-start",
        }}
      >
        {
          <View
            style={{
              height: 150,
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: "#6e78f7",
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          />
        }
        <Card
          style={{
            marginTop: 55,
            zIndex: 1000,
            elevation: 10,
            alignItems: "center",
            width: "80%",
            height: 500,
          }}
        >
          {/*<Text>your email : {email}</Text>*/}

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
              type="email"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(t) => setEmail(t)}
              underlineColorAndroid="transparent"
            />
          </View>
          {/* <Text>your password : {password}</Text>*/}
          <View
            style={{
              //  width: 250,
              //paddingRight: 5,
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
                marginLeft: 3 /*, borderWidth: 1, borderColor: "lightgray" */,
              }}
            />
            <TextInput
              style={{
                width: "65%",
                height: "100%",
                marginLeft: 10,
                borderWidth: 1,
                borderColor: "lightgray",
              }}
              type="password"
              secureTextEntry={!isShowPassword}
              placeholder="Mot de passe"
              onChangeText={(p) => setPassword(p)}
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
              title="   se connecter   "
              color="#6e78f7"
              onPress={() => alert("Connect")}
            />
          </View>
          <Text style={{ marginTop: 20 }}>vous n'avez pas de compte?</Text>
          <Text
            style={{
              marginTop: 10,
              paddingTop: 5,
              color: "blue",
              //borderWidth: 1,
              //borderColor: "lightgray",
              height: 30,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            créer un compte
          </Text>

          <Image
            source={loginimg}
            style={{
              marginTop: 40,
            }}
          />
        </Card>
      </View>
    </>
  );
};

export default LoginScreen;
