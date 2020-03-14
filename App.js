import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import Profile from "./profile";
export default function App() {
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [signIn, setSignin] = useState(false);

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "your client ID generated through google app developer api",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        setName(result.user.name);
        setPhoto(result.user.photoUrl);
        console.log(result.user.photoUrl);
        setSignin(true);
      } else {
        console.log("Not found");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      {signIn ? (
        <Profile name={name} photourl={photo} />
      ) : (
        <View>
          <Text>Google Sign in</Text>
          <Button title="Sign in Google" onPress={signInWithGoogleAsync} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

