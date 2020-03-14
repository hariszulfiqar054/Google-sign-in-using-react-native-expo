import React from "react";
import { View, Text, Image } from "react-native";

const Profile = ({ name, photourl }) => {
  return (
    <View>
      <Text>Welcome : {name}</Text>
      <Image
        style={{ borderRadius: 100, width: 200, height: 200 }}
        source={{ uri: photourl }}
      />
    </View>
  );
};

export default Profile;
