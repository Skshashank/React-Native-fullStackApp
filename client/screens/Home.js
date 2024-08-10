import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import FooterMenu from "@/components/Menus/FooterMenu";

const Home = () => {
  //glbal state destructure , we will use context and pass Auth context
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Sweet Home </Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <FooterMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
});

export default Home;
