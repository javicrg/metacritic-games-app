import { Pressable, View } from "react-native";
import { Link, Stack } from "expo-router";

import "../global.css";
import { Logo } from "../components/Logo";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable className="flex-row items-center gap-2 active:opacity-50">
                <FontAwesome5 name="info-circle" size={30} color="white" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
