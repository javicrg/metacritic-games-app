import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";

const icon = require("./assets/icon.png");

export default function App() {
  const [timesPressed, setTimesPressed] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontWeight: pressed ? "bold" : "normal" }}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
