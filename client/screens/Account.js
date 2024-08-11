import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import FooterMenu from "@/components/Menus/FooterMenu";

const Account = () => {
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/008/259/265/small_2x/young-smiling-man-cartoon-character-keeping-arms-crossed-businessman-standing-with-folded-arms-pose-flat-illustration-isolated-on-white-background-free-vector.jpg",
          }}
          style={{ height: 200, width: 200, borderRadius: 100 }}
        />
      </View>
      <Text style={styles.warningtext}>
        Currenlty you can only Update your Name and Password*
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput style={styles.inputBox} value={state?.user.name} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={state?.user.email}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.inputBox} value={state?.user.password} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Role</Text>
        <TextInput
          style={styles.inputBox}
          value={state?.user.role}
          editable={false}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  warningtext: {
    color: "red",
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontWeight: "bold",
    width: 70,
    color: "gray",
  },
  inputBox: {
    width: 250,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    borderRadius: 6,
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default Account;
