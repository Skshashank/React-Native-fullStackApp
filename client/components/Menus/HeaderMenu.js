import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderMenu = () => {
  //global state manipulate for, logout as well
  const [state, setState] = useContext(AuthContext);
  return (
    <View>
      <TouchableOpacity>
        <FontAwesome5 name="home" style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
    color: "blue",
  },
});

export default HeaderMenu;
