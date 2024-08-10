import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const Home = () => {
  //glbal state destructure , we will use context and pass Auth context
  const [state] = useContext(AuthContext);
  return (
    <View>
      <Text>Home Sweet Home </Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

export default Home;
