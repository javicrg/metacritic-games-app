import { View, ActivityIndicator, FlatList } from "react-native";
import { AnimatedGameCard } from "./GameCard";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import { StatusBar } from "expo-status-bar";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <Screen>
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
      </Screen>
    </>
  );
}
