import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>this is index page, hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Page;
