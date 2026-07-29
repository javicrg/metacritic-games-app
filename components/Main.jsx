import {
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <SafeAreaView style={{ margin: 12 }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Logo />
      </View>

      <Link asChild href="/about">
        <Pressable className="flex-row items-center mb-4 active:opacity-50">
          <FontAwesome5 name="info-circle" size={30} color="white" />{" "}
          <Text className="text-blue-400 text-xl">About</Text>
        </Pressable>
      </Link>

      {games.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        ></FlatList>
      )}
    </SafeAreaView>
  );
}
